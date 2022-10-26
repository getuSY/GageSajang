package com.ssafy.e205.api.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.e205.api.dto.UserDto;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;

@Service
public class KakaoServiceImpl implements KakaoService{
    private String url = "kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code";
    private final static String REST_API_KEY = "c2ca1f9972008ef39999c0eacbe58769";
    private final static String REDIRECT_URL = "http://localhost:8081/user/kakao";
    private final static String LOGOUT_REDIRECT_URL = "http://localhost:8081/user/kakao/logout";
    private final static String CLIENT_SECRET_KEY = "6mJiCJah7V2zdkTMeklat8tdwOaqxz2R";


    @Override
    public String getKaKaoAccessToken(String code) {
        String access_Token="";
        String refresh_Token ="";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try{
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id="+REST_API_KEY); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri="+REDIRECT_URL); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&client_secret="+CLIENT_SECRET_KEY); // TODO client secret 키값 입력
            sb.append("&code=" + code);
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

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        }catch (IOException e) {
            e.printStackTrace();
        }

        return access_Token;
    }

    @Override
    public UserDto createKaKaoUser(String token) {
        String reqURL = "https://kapi.kakao.com/v2/user/me";
        UserDto userDto = new UserDto();
        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

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

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            int id = element.getAsJsonObject().get("id").getAsInt();
            boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
//            boolean hasNickName = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("profile_nickname_needs_agreement").getAsBoolean();
            boolean hasNickName = true;
            String email = "";
            String nickname = "";
            if(hasEmail){
                email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
            }
            if(hasNickName){
                nickname = element.getAsJsonObject().get("kakao-account").getAsJsonObject().get("profile").getAsJsonObject().get("nickname").getAsString();
            }

            System.out.println("id : " + id);
            System.out.println("email : " + email);
            System.out.println("nickname : " + nickname);
            userDto.setEmail(email);
            userDto.setNickName(nickname);
            userDto.setAccessToken(token);

            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return userDto;
    }

    @Override
    public long expirationKaKaoToken(String token) {
        String reqURL = "https://kapi.kakao.com/v1/user/logout";

        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id="+REST_API_KEY); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri="+REDIRECT_URL); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&client_secret="+CLIENT_SECRET_KEY); // TODO client secret 키값 입력
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

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            long id = element.getAsJsonObject().get("id").getAsInt();

            System.out.println("id : " + id);

            br.close();
            return id;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public void logoutKaKaoUser(String token) {
        //https://kauth.kakao.com/oauth/logout?client_id=${YOUR_REST_API_KEY}&logout_redirect_uri=${YOUR_LOGOUT_REDIRECT_URI}
        String reqURL = "https://kapi.kakao.com/oauth/logout";

        try{
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("GET");
//            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("&client_id="+REST_API_KEY); // TODO REST_API_KEY 입력
            sb.append("&logout_redirect_uri="+LOGOUT_REDIRECT_URL); //TODO logout_redirect_uri 입력
//            sb.append("&client_secret="+CLIENT_SECRET_KEY); // TODO client secret 키값 입력

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

            String responseStr = element.getAsJsonObject().get("state").getAsString();

            System.out.println("state : " + responseStr);

            br.close();
            bw.close();
        }catch (IOException e) {
            e.printStackTrace();
        }
    }
}
