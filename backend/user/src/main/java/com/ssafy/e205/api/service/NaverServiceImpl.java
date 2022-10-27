package com.ssafy.e205.api.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.e205.api.dto.UserDto;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@Service
public class NaverServiceImpl implements NaverService{
    private final static String CLIENT_SECRET = "7ERn4uBwQb";
    private final static String CLIENT_ID = "zNPmRh99kzmjSsixo55d";
    private final static String CALLBACK_URL = "http://localhost:8081/user/naver/login";
    private final static String TMP_STATE_KEY = "K7E205SSAFY";
    //https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=zNPmRh99kzmjSsixo55d&state=STATE_STRING&redirect_uri=http://localhost:8081/user/naver/login
    /*https://nid.naver.com/oauth2.0/token?
        grant_type=authorization_code
        &client_id=jyvqXeaVOVmV
        &client_secret=527300A0_COq1_XV33cf
        &code=EIc5bFrl4RibFls1
        &state=9kgsGTfH4j7IyAkg*/
    @Override
    public String getNaverToken(String code, String state) {
        String access_Token="";
        String refresh_Token ="";
        int expires_in = 0;
        String reqURL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code";

        try{
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("&client_id="+CLIENT_ID); // TODO CLIENT_ID 입력
            sb.append("&client_secret="+CLIENT_SECRET); //TODO CLIENT_SECRET 값 입력
            sb.append("&code="+code); // TODO 로그인 연동 리턴 Code 값
            sb.append("&state="+state); // TODO 로그인 연동 리턴 state 값
            System.out.println("reqURL : " + sb.toString());
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);
            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();
            expires_in = element.getAsJsonObject().get("expires_in").getAsInt();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);
            System.out.println("expires_in : " + expires_in);

            br.close();
            bw.close();

//            return getNaverEmail(access_Token);
        }catch (IOException e) {
            e.printStackTrace();
        }
        return access_Token+","+refresh_Token;
    }

    @Override
    public UserDto getNaverUserInfo(String accessToken, String refreshToken) {
        String reqURL = "https://openapi.naver.com/v1/nid/me";

        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + accessToken); //전송할 header 작성, access_token전송

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            String resultCode = element.getAsJsonObject().get("resultcode").getAsString();
            String email = element.getAsJsonObject().getAsJsonObject("response").get("email").getAsString();
            String nickname = element.getAsJsonObject().getAsJsonObject("response").get("nickname").getAsString();

            System.out.println("resultCode : " + resultCode);
            System.out.println("email : " + email);
            System.out.println("nickname : " + nickname);

            br.close();

            UserDto userDto = new UserDto();
            userDto.setEmail(email);
            userDto.setNickName(nickname);
            userDto.setAccessToken(accessToken);
            userDto.setRefreshToken(refreshToken);
            return userDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
