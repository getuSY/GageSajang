package csv;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.nio.charset.StandardCharsets;

public class Api {
    private static final String apiKey = "76546c7245746d6433356d45556862";
    public String getApi(){
        StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088"); /*URL*/
        try {
            urlBuilder.append("/").append(URLEncoder.encode(apiKey, StandardCharsets.UTF_8)); /*인증키 (sample사용시에는 호출시 제한됩니다.)*/
            urlBuilder.append("/").append(URLEncoder.encode("json", StandardCharsets.UTF_8)); /*요청파일타입 (xml,xmlf,xls,json) */
            urlBuilder.append("/").append(URLEncoder.encode("CardSubwayStatsNew", StandardCharsets.UTF_8)); /*서비스명 (대소문자 구분 필수입니다.)*/
            urlBuilder.append("/").append(URLEncoder.encode("1", StandardCharsets.UTF_8)); /*요청시작위치 (sample인증키 사용시 5이내 숫자)*/
            urlBuilder.append("/").append(URLEncoder.encode("593", StandardCharsets.UTF_8)); /*요청종료위치(sample인증키 사용시 5이상 숫자 선택 안 됨)*/
            // 상위 5개는 필수적으로 순서바꾸지 않고 호출해야 합니다.

            // 서비스별 추가 요청 인자이며 자세한 내용은 각 서비스별 '요청인자'부분에 자세히 나와 있습니다.
            urlBuilder.append("/").append(URLEncoder.encode("20220301", StandardCharsets.UTF_8)); /* 서비스별 추가 요청인자들*/

            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/xml");
            System.out.println("Response code: " + conn.getResponseCode()); /* 연결 자체에 대한 확인이 필요하므로 추가합니다.*/
            BufferedReader rd;

            // 서비스코드가 정상이면 200~300사이의 숫자가 나옵니다.
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();
            String result = parser(sb.toString());
//            System.out.println(sb.toString());
            return result;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public String parser(String json){
        String result = json;

        return result;
    }
}
