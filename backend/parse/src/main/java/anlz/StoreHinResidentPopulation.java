package anlz;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class StoreHinResidentPopulation {


    StringBuilder allCsvStr = new StringBuilder();

    private static final String apiKey = "6f7a755a55636b733936755a446d4d";
    public void getApi(){
        StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088/" + apiKey + "/json/VwsmTrdhlRepopQq");
        try {

            int start = 1;
            int end = 1000;

            while(true){
                String tmpUrl = urlBuilder.toString() + "/" + String.valueOf(start) + "/" + String.valueOf(end) + "/2021";

                URL url = new URL(tmpUrl);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                conn.setRequestProperty("Content-type", "application/xml");
                System.out.println("Response code: " + conn.getResponseCode()); /* 연결 자체에 대한 확인이 필요하므로 추가합니다.*/
                BufferedReader rd;
                // 서비스코드가 정상이면 200~300사이의 숫자가 나옵니다.
                if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                    rd = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
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
                int result = parser(sb.toString());
                if(result<1000) break;
                start += 1000;
                end += 1000;
            }

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\hinterland\\ResidentPopulationStoreHin.csv"));
            bw.write(allCsvStr.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public int parser(String json){
        String result = json;
        JSONParser jsonParser = new JSONParser();
        int cnt = 0;
        StringBuilder sb = new StringBuilder();

        try{
            Object tmp = jsonParser.parse(json);
            JSONObject jsonObject = (JSONObject)tmp;
            JSONObject VwsmTrdarRepopQq = (JSONObject)jsonObject.get("VwsmTrdhlRepopQq");
            JSONArray rows = (JSONArray)VwsmTrdarRepopQq.get("row");

            for(int i=0; i<rows.size(); i++){
                JSONObject row = (JSONObject) rows.get(i);


                sb.append("\"" + row.get("TRDAR_CD") + "\",");  // 상권 코드
                sb.append("\"" + row.get("TOT_REPOP_CO") + "\"");  // 총생활 인구

                sb.append("\n");
                cnt++;

                //System.out.print(sb.toString());
            }

        } catch (Exception e){
            e.printStackTrace();
        }

        allCsvStr.append(sb);

        return cnt;
    }
}
