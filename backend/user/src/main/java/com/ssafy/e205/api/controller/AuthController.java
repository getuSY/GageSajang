package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.api.service.Auth.*;
import com.ssafy.e205.config.JwtTokenProvider;
import com.ssafy.e205.db.entity.UserEntity;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Objects;
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

    @Operation(summary = "test hello", description = "hello api example")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/hello")
    public ResponseEntity<String> hello(@Parameter(description = "이름", required = true, example = "Park") @RequestParam String name) {
        return ResponseEntity.ok("hello " + name);
    }

    @GetMapping("/test")
    public String test(){
        return "hello?";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDto userDto){
        String error = "";
        if(userService.findByEmail(userDto.getEmail()).isEmpty()){ // 회원 여부 확인
            error = "Local Login Error : this email is not user";
        }
        else if(!Objects.equals(userService.findByEmail(userDto.getEmail()).get().getType(), "local")){ //타 플랫폼 가입 확인
            error = "Local Login Error : already sign in another platform";
        }
        else{
            int state = userService.findByEmailToState(userDto.getEmail());
            String token = "token : ";
            if(state == 1){ // 이미 로그인 한 경우라면
                System.out.println("already login account");
                error = "Local Login Error : already login";
            }
            else{
                boolean result = userService.checkPassword(userDto.getPw(), userDto.getEmail()); //비밀번호 체크
                if(result){
                    try{
                        token += jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList()); // JWT 토큰
                        userDto.setState(1); // 로그인 상태 변환
                        userService.updateState(1, userDto.getEmail()); // DB에서 로그인 상태 변환
                        System.out.println("Login Success");
                        return token;
                    }
                    catch (Exception e){ // 로그인 과정에서 에러 발생시
                        userDto.setState(0);
                        userService.updateState(0, userDto.getEmail()); // DB에서 비 로그인 상태로 전환
                        System.out.println("Login Error");
                        error = "Local Login Error : change state failed";
                    }
                }
                else{ // 비밀번호 불일치
                    System.out.println("Login Failed");
                    error = "Local Login Error : incorrect password";
                }
            }
        }
        return error;
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
        String error = "";
        String token = kakaoService.getKaKaoAccessToken(code);
        if(token.isEmpty()){
            error = "KaKao Login Error : token is null";
        }
        else{
            System.out.println("kakao result : "+token);
            UserDto userDto = kakaoService.createKaKaoUser(token);
            if(userDto.getEmail().isEmpty()){
                error = "Kakao Login Error : userInfo is null";
            }
            else{
                if(userService.findByEmail(userDto.getEmail()).isEmpty()){ //sign in
                    userDto.setPw("kakaoPW"); //tmp data(trash data)
                    userDto.setAuth("user");
                    userDto.setType("kakao");
                    userDto.setState(0);
                    userDto.setRefreshToken("kakaoRefreshToken"); // tmp data(trash data)
                    userService.save(userDto);
                }

                if(userService.findByEmailToState(userDto.getEmail()) == 1){
                    error = "Kakao Login Error : already login";
                }
                else if(!Objects.equals(userService.findByEmail(userDto.getEmail()).get().getType(), "kakao")){
                    error = "Kakao Login Error : already sign in another platform";
                }
                else{
                    try{
                        userService.updateState(1, userDto.getEmail());
                        userDto.setAuth(userService.findByEmail(userDto.getEmail()).get().getAuth());
                        token = "token : "+jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList());
                        return token;
                    }
                    catch (Exception e){
                        System.out.println("Kakao Login Error : " + e);
                        e.printStackTrace();
                        error = "Kakao Login Error : update state failed";
                        userService.updateState(0, userDto.getEmail());
                    }
                }
            }
        }
        return error;
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
    public String naverLogin(@RequestParam String code, @RequestParam String state){
        //call by redirect link : https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zNPmRh99kzmjSsixo55d&state=STATE_STRING&redirect_uri=http://localhost:8081/user/naver/login
        String[] tokens = naverService.getNaverToken(code, state).split(",");
        String error;
        if(tokens.length <= 0){
            error = "Naver Login Error : tokens are null";
            System.out.println("Naver Login Error : tokens are null");
        }
        else{
            UserDto userDto = naverService.getNaverUserInfo(tokens[0], tokens[1]); //accessToken, refreshToken
            if(userDto.getEmail().isEmpty()){ // sign in
                error = "Naver Login Error : userInfo is null";
                System.out.println("Naver Login Error : userInfo is null");
            }
            else{
                if(userService.findByEmail(userDto.getEmail()).isEmpty()){
                    userDto.setPw("naverPW");
                    userDto.setAuth("user");
                    userDto.setState(0);
                    userDto.setType("naver");
                    userService.save(userDto);
                }
                if(userService.findByEmailToState(userDto.getEmail()) == 1){
                    error = "Naver Login Error : already login";
                }
                else if(!Objects.equals(userService.findByEmail(userDto.getEmail()).get().getType(), "naver")){
                    error = "Naver Login Error : already sign in another platform";
                }
                else{
                    String token = "token : ";
                    try{
                        userDto.setAuth(userService.findByEmail(userDto.getEmail()).get().getAuth());
                        token += jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList());
                        userService.updateState(1, userDto.getEmail());
                        System.out.println("Naver Login Success");
                    }
                    catch (Exception e){
                        userService.updateState(0, userDto.getEmail());
                        System.out.println("Naver Login Error : change state failed");
                    }
                    return token;
                }
            }
        }
        return error;
    }

}
