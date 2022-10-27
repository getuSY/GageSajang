package anlz;

import object.ResidentPopulation;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StoreGu {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\StoreCount.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new String[]{lineArr[0], lineArr[1], lineArr[5], lineArr[6], lineArr[7]});
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        finally {
            try{
                if(br != null){
                    br.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return list;
    }

    public void sum(){

        List<String[]> store = readCSV();

        HashMap<String, String[]> map = new HashMap<>();

        for(int i=0; i<store.size(); i++){

            String[] rare = store.get(i);
            String key = rare[0]+rare[1];

            if(map.containsKey(key)){

                String[] tmp = map.get(key);
                String[] total = new String[5];

                total[0] = rare[0];
                total[1] = rare[1];
                for(int j=2; j<5; j++){
                    total[j] = String.valueOf(Integer.parseInt(rare[j]) + Integer.parseInt(tmp[j]));
                }

                map.replace(key, total);
            } else{
                map.put(key, rare);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String key : map.keySet()){

            String[] result = map.get(key);
            int totalCnt = Integer.parseInt(result[2])/4;
            int open = totalCnt==0? 0 : (int)((Float.parseFloat(result[3])/totalCnt)*100);
            int close =  totalCnt==0? 0 : (int)((Float.parseFloat(result[4])/totalCnt)*100);


            for(int i=0; i<2; i++){
                sb.append("\"" + result[i] + "\",");
            }
            sb.append("\"" + (int)totalCnt + "\",");
            sb.append("\"" + open + "\",");
            sb.append("\"" + close + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultStoreGu.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
