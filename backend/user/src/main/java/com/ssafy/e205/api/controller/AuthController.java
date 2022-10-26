package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.api.service.*;
import com.ssafy.e205.config.JwtTokenProvider;
import com.ssafy.e205.db.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class AuthController {

    private String TEST_TOKEN_SERVER = "";
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    KakaoService kakaoService = new KakaoServiceImpl();

    @Autowired
    NaverService naverService = new NaverServiceImpl();

    @Autowired
    UserService userService = new UserServiceImpl();


    @GetMapping("/test")
    public String test(){
        return "hello?";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDto userDto){
        int state = userService.findByEmailToState(userDto.getEmail());
        String token = "";
        if(state == 1){ // 이미 로그인 한 경우라면
            System.out.println("already login account");
        }
        else{
            boolean result = userService.checkPassword(userDto.getPw(), userDto.getEmail()); //비밀번호 체크
            if(result){
                try{
                    token = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList()); // JWT 토큰
                    userDto.setState(1); // 로그인 상태 변환
                    userService.updateState(1, userDto.getEmail()); // DB에서 로그인 상태 변환
                    System.out.println("Login Success");
                }
                catch (Exception e){ // 로그인 과정에서 에러 발생시
                    userDto.setState(0);
                    userService.updateState(0, userDto.getEmail()); // DB에서 비 로그인 상태로 전환
                    System.out.println("Login Error");
                }
            }
            else{
                System.out.println("Login Failed");
            }
        }
        return token;
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){
        String access_Token = (String)session.getAttribute("access_Token");
        if(access_Token != null && !"".equals(access_Token)){
            UserDto userDto = userService.findByAccessToken(access_Token);
            userService.updateState(1, userDto.getEmail());
            session.removeAttribute("access_Token");
            session.removeAttribute("userEmail");
        }else{
            System.out.println("access_Token is null");
        }
    }

    @GetMapping("/overlap")
    public boolean overlapCheck(String email){
        Optional<UserEntity> userEntity = userService.findByEmail(email);
        return userEntity.isPresent();
    }

    @PostMapping("/signup")
    public void signup(@RequestBody UserDto userDto){
        System.out.println("SignUp : " + userDto);
        userService.save(userDto);
    }

    @PostMapping("/secession")
    public void secession(@RequestBody UserDto userDto){
        userService.deleteByEmail(userDto.getEmail());
    }

    @GetMapping("/kakao")
    public String kakaoLogin(@RequestParam String code){
        //call by redirect link : https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c2ca1f9972008ef39999c0eacbe58769&redirect_uri=http://localhost:8081/user/kakao
        System.out.println(code);
        String token = kakaoService.getKaKaoAccessToken(code);
        System.out.println("kakao result : "+token);
        UserDto userDto = kakaoService.createKaKaoUser(token);
        userDto.setPw("kakaoPW"); //tmp data(trash data)
        userDto.setAuth("user");
        userDto.setType("kakao");
        userDto.setState(0);
        userDto.setRefreshToken("kakaoRefreshToken"); // tmp data(trash data)
        /**
         * save to db
         * */

        token = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList());
        return  token;
    }
    @GetMapping("/kakao/expiration")
    //public void kakaoLogOut(HttpSession session){
    public void kakaoLogOut(){
//        String access_Token = (String)session.getAttribute("access_Token"); //access_token to TEST_TOKEN_SERVER
        long id = kakaoService.expirationKaKaoToken(TEST_TOKEN_SERVER);
        if(id == 0){ //failed
            System.out.println("logout error");
        }
        else{
            System.out.println("logout success");
//            if(access_Token != null && !"".equals(access_Token)){
//                kakaoAPI.kakaoLogout(access_Token);
//                session.removeAttribute("access_Token");
//                session.removeAttribute("userId");
//            }else{
//                System.out.println("access_Token is null");
//                //return "redirect:/";
//            }
//            //return "index";
//            return "redirect:/";
        }
    }

    @GetMapping("/naver/login")
    public void naverLogin(@RequestParam String code, @RequestParam String state){
        //call by redirect link : https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zNPmRh99kzmjSsixo55d&state=STATE_STRING&redirect_uri=http://localhost:8081/user/naver/login
        String email = naverService.getNaverToken(code, state);
        System.out.println("naver email : "+email);
    }
}
