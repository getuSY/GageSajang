package anlz;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StoreSalesVarious {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\SalesRareData\\Sales2021.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            br.readLine();
            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                String[] tmp = new String[22];
                tmp[0] = lineArr[4];
                for(int i=1; i<22; i++){
                    tmp[i] = lineArr[i+11];
                }
                list.add(tmp);
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

    public static HashMap<String, String> readCSV2(){
        HashMap<String, String> code = new HashMap<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\nan_commercialArea.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));
            int index = 0;

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                    //System.out.print(i+lineArr[i]+" ");
                }


                code.put(lineArr[3], lineArr[10]);

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
        return code;
    }

    public void combine(){

        List<String[]> list = readCSV(); // rare 데이터
        List<String[]> result = new ArrayList<>();
        HashMap<String ,String> code = readCSV2();
        HashMap<String, Integer> cnt = new HashMap<>();

        HashMap<String, String[]> gu = new HashMap<>();


        for(int i=0; i<list.size(); i++){
            String guName = code.get(list.get(i)[0]);
            String[] rare = list.get(i);
            String key = guName;

            if(gu.containsKey(key)){
                String[] tmp = new String[22];

                tmp[0] = guName;
                for(int j=1; j<22; j++){
                    tmp[j] = String.valueOf(Integer.parseInt(rare[j]) + Integer.parseInt(gu.get(key)[j]));
                }

                gu.replace(key, tmp);
                cnt.replace(key, cnt.get(key)+1);

            } else {
                gu.put(key, rare);
                cnt.put(key, 1);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String key: gu.keySet()){

            String[] tmp = gu.get(key);

            sb.append("\"" + tmp[0] + "\",");
            for(int i=1; i<21; i++){
                sb.append("\"" + Math.round(Float.parseFloat(tmp[i])*100/(100*cnt.get(key))) + "\",");
            }
            sb.append("\"" + Math.round(Float.parseFloat(tmp[2])*100/(100*cnt.get(key))) + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultSalesVarious.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}
