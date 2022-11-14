package com.ssafy.e205.api.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.ssafy.e205.E205Application;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/auth")
@CrossOrigin("*")
public class  AuthController {

    private String TEST_TOKEN_SERVER = "";
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    private E205Application application;

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
        return "hello? this application port : "+application.portNum;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto){
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        if(userService.findByEmail(userDto.getEmail()).isEmpty()){ // 회원 여부 확인
            jsonObject.addProperty("error","this email is not user");
        }
        else if(!"local".equals(userService.findByEmail(userDto.getEmail()).get().getType())){ //타 플랫폼 가입 확인
            jsonObject.addProperty("error","already sign in another platform");
        }
        else{
            boolean result = userService.checkPassword(userDto.getPw(), userDto.getEmail()); //비밀번호 체크
            if(result){
                int state = userService.findByEmailToState(userDto.getEmail());
                if(state == 100) { // tmp code for dev
//                if(state == 1){ // 이미 로그인 한 경우라면
                    System.out.println("already login account");
                    jsonObject.addProperty("error","already login");
                }
                else{
                    String accessToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);
                    String refreshToken = jwtTokenProvider.createToken(userDto.getRefreshToken(), userDto.getAuthList(), false);
                    jsonObject.addProperty("token", accessToken);
//                        jsonObject.addProperty("accessToken", accessToken); // JWT 토큰
//                        jsonObject.addProperty("refreshToken", refreshToken); // JWT 토큰
                    userDto.setState(1); // 로그인 상태 변환
                    userDto.setAccessToken(accessToken);
                    userDto.setRefreshToken(refreshToken);
                    System.out.println("userDto : " + userDto);
                    int updateResult = userService.updateUser(userDto);
                    if(updateResult < 0){
                        System.out.println("Login Failed");
                        JsonObject jsonObjectFailed = new JsonObject();
                        jsonObjectFailed.addProperty("error","change state failed");
                        return new ResponseEntity<>(gson.toJson(jsonObjectFailed), HttpStatus.OK);
                    }
                    else{
                        System.out.println("Login Success");
                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                }
            }
            else{ // 비밀번호 불일치
                System.out.println("Login Failed");
                jsonObject.addProperty("error","incorrect password");
            }
        }
        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.BAD_REQUEST);
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
    public ResponseEntity<String> overlapCheck(@RequestHeader("Authorization") String accessToken){
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();
        boolean tokenValidate = jwtTokenProvider.validateToken(accessToken);
        if(tokenValidate){
            UserDto dto = userService.findByAccessToken(accessToken);
            if(dto == null){
                jsonObject.addProperty("result", "false");
            }
            else{
                jsonObject.addProperty("result", "true");
            }

            return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
        }
        else{
            jsonObject.addProperty("error","false");
            return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody UserDto userDto){
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        System.out.println("SignUp : " + userDto);
        userDto.setAuth("user");
        userDto.setState(1);

        try{
            userService.save(userDto);

            String accessToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);
            String refreshToken = jwtTokenProvider.createToken(userDto.getRefreshToken(), userDto.getAuthList(), false);
            jsonObject.addProperty("token", accessToken);
//                        jsonObject.addProperty("accessToken", accessToken); // JWT 토큰
//                        jsonObject.addProperty("refreshToken", refreshToken); // JWT 토큰
            userDto.setState(1); // 로그인 상태 변환
            userDto.setAccessToken(accessToken);
            userDto.setRefreshToken(refreshToken);
            System.out.println("userDto : " + userDto);

            int updateResult = userService.updateUser(userDto);
            if(updateResult < 0){
                System.out.println("SignUp Failed");
                JsonObject jsonObjectFailed = new JsonObject();
                jsonObjectFailed.addProperty("error","change state failed");
                return new ResponseEntity<>(gson.toJson(jsonObjectFailed), HttpStatus.BAD_REQUEST);
            }
            else{
                System.out.println("SignUp Success");
                return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
            }
        }
        catch (Exception e){
            System.out.println("SignUp Failed");
            JsonObject jsonObjectFailed = new JsonObject();
            jsonObjectFailed.addProperty("error","SignUp failed");
            return new ResponseEntity<>(gson.toJson(jsonObjectFailed), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/secession")
    public void secession(@RequestBody UserDto userDto){
        userService.deleteByEmail(userDto.getEmail());
    }

    @GetMapping("/kakao")
    public ResponseEntity<String> kakaoLogin(@RequestParam String code){
        //call by redirect link : https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c2ca1f9972008ef39999c0eacbe58769&redirect_uri=http://localhost:8081/user/kakao
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        System.out.println(code);
        String error = "";
        String token = kakaoService.getKaKaoAccessToken(code);
        if(token.isEmpty()){
            error = "token is null";
        }
        else{
            System.out.println("kakao result : "+token);
            UserDto userDto = kakaoService.createKaKaoUser(token);
            if(userDto.getEmail().isEmpty()){
                error = "userInfo is null";
            }
            else{
                if(userService.findByEmail(userDto.getEmail()).isEmpty()){ //sign in
                    String accessToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);
                    String refreshToken = jwtTokenProvider.createToken(userDto.getRefreshToken(), userDto.getAuthList(), false);
                    jsonObject.addProperty("token", accessToken);

//                        jsonObject.addProperty("accessToken", accessToken); // JWT 토큰
//                        jsonObject.addProperty("refreshToken", refreshToken); // JWT 토큰

                    userDto.setState(1); // 로그인 상태 변환
                    userDto.setAccessToken(accessToken);
                    userDto.setRefreshToken(refreshToken);
                    userDto.setPw("kakaoPW"); //tmp data(trash data)
                    userDto.setAuth("user");
                    userDto.setType("kakao");
                    userDto.setRefreshToken("kakaoRefreshToken"); // tmp data(trash data)
                    try{
                        userService.updateUser(userDto);
                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                    catch(Exception e){
                        JsonObject jsonObjectFailed = new JsonObject();
                        jsonObjectFailed.addProperty("error", "Server Error");
                        return new ResponseEntity<>(gson.toJson(jsonObjectFailed), HttpStatus.BAD_GATEWAY);
                    }

                }

                if(userService.findByEmailToState(userDto.getEmail()) == 1){
                    error = "already login";
                }
                else if(!Objects.equals(userService.findByEmail(userDto.getEmail()).get().getType(), "kakao")){
                    error = "already sign in another platform";
                }
                else{
                    try{
//                        userService.updateState(1, userDto.getEmail());
                        userDto.setAuth(userService.findByEmail(userDto.getEmail()).get().getAuth());
                        String accessToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);
                        String refreshToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), false);

                        jsonObject.addProperty("token", accessToken);
//                        jsonObject.addProperty("accessToken", accessToken); // JWT 토큰
//                        jsonObject.addProperty("refreshToken", refreshToken); // JWT 토큰
                        userDto.setState(1); // 로그인 상태 변환
                        userDto.setAccessToken(accessToken);
                        userDto.setRefreshToken(refreshToken);
                        userService.save(userDto);

                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                    catch (Exception e){
                        System.out.println("Kakao Login Error : " + e);
                        e.printStackTrace();
                        error = "update state failed";
                        userService.updateState(0, userDto.getEmail());
                    }
                }
            }
        }
        jsonObject.addProperty("error", error);
        return new ResponseEntity<>(gson.toJson(jsonObject),HttpStatus.BAD_REQUEST);
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
    public ResponseEntity<String> naverLogin(@RequestParam String code, @RequestParam String state){
        //call by redirect link : https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zNPmRh99kzmjSsixo55d&state=STATE_STRING&redirect_uri=http://localhost:8081/user/naver/login
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        String[] tokens = naverService.getNaverToken(code, state).split(",");
        String error;
        if(tokens.length <= 0){
            error = "Naver Login Error : tokens are null";
            System.out.println("Naver Login Error : tokens are null");
        }
        else{
            UserDto userDto = naverService.getNaverUserInfo(tokens[0], tokens[1]); //accessToken, refreshToken
            if(userDto.getEmail().isEmpty()){ //null email data from naver
                error = "userInfo is null";
                System.out.println("Naver Login Error : userInfo is null");
            }
            else{
                if(userService.findByEmail(userDto.getEmail()).isEmpty()){ // sign in
                    String accessToken = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);
                    userDto.setAccessToken(accessToken);

                    userDto.setPw("naverPW");
                    userDto.setAuth("user");
                    userDto.setRefreshToken(tokens[1]);
                    userDto.setState(1);
                    userDto.setType("naver");
                    try{
                        userService.save(userDto);

                        jsonObject.addProperty("token", accessToken);
//                    jsonObject.addProperty("accessToken", accessToken);
//                    jsonObject.addProperty("refreshToken", tokens[1]);

                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                    catch (Exception e){
                        e.printStackTrace();
                        userService.updateState(0, userDto.getEmail());
                        System.out.println("Naver Login Error : change state failed");
                        jsonObject.addProperty("error", "change state failed");
                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                }
                if(!Objects.equals(userService.findByEmail(userDto.getEmail()).get().getType(), "naver")){
                    error = "already sign in another platform";
                }
                else if(userService.findByEmailToState(userDto.getEmail()) == 1){
                    error = "already login";
                }
                else{
                    String token = "";
                    try{
                        userDto.setAuth(userService.findByEmail(userDto.getEmail()).get().getAuth());
                        token = jwtTokenProvider.createToken(userDto.getEmail(), userDto.getAuthList(), true);

                        userDto.setAccessToken(token);
                        userDto.setRefreshToken(tokens[1]);
                        userDto.setState(1);
                        userService.updateUser(userDto);
                        jsonObject.addProperty("token", token);
//                        jsonObject.addProperty("accessToken", token);
//                        jsonObject.addProperty("refreshToken", tokens[1]);
                        System.out.println("Naver Login Success");
                        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
                    }
                    catch (Exception e){
                        userService.updateState(0, userDto.getEmail());
                        System.out.println("Naver Login Error : change state failed");
                        error = "change state failed";
                    }

                }
            }
        }
        jsonObject.addProperty("error", error);
        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
    }

    @GetMapping("/getUserInfo")
    public ResponseEntity<String> getUserInfoOnlyNickname(@RequestHeader("Authorization") String accessToken){
        String userInfo;
        HttpStatus httpStatus;
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        System.out.println("AccessToken : " + accessToken);

        boolean validate = jwtTokenProvider.validateToken(accessToken); //  move to filter this feature(token validate check)
        if(validate){
            String email = jwtTokenProvider.getUserPk(accessToken);
            System.out.println("email from getUserInfo : " + email);
            Optional<UserEntity> entity = userService.findByEmail(email);
            System.out.println("entity from getUserInfo : " + entity);
            if(entity.isEmpty()){
                jsonObject.addProperty("error","User Info isn't existed");
                httpStatus = HttpStatus.BAD_REQUEST;
            }
            else{
                UserDto dto = new UserDto(entity.get());
                jsonObject.addProperty("nickname",dto.getNickName());
                httpStatus = HttpStatus.OK;
            }
        }
        else{
            jsonObject.addProperty("error", "token validate is expired");
            httpStatus = HttpStatus.BAD_REQUEST;
        }

        userInfo = gson.toJson(jsonObject);
        return new ResponseEntity<>(userInfo, httpStatus);
    }
    @GetMapping("/refreshToken")
    public ResponseEntity<String> refreshAccessToken(@RequestHeader("RefreshToken") String refreshToken){
        String newAccessToken;
        HttpStatus httpStatus;
        Gson gson = new Gson();
        JsonObject jsonObject = new JsonObject();

        boolean validate = jwtTokenProvider.validateToken(refreshToken);
        if (validate){
            String email = jwtTokenProvider.getUserPk(refreshToken);
            Optional<UserEntity> entity = userService.findByEmail(email);
            UserDto dto = new UserDto(entity.get());
            String newToken = jwtTokenProvider.createToken(dto.getEmail(),dto.getAuthList(),true);
            jsonObject.addProperty("accessToken", newToken);
            httpStatus = HttpStatus.OK;
        }
        else{
            jsonObject.addProperty("error", "token validate is expired");
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        newAccessToken = gson.toJson(jsonObject);
        return new ResponseEntity<>(newAccessToken, httpStatus);
    }
}
