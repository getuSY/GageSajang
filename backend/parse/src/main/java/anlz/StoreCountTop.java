package anlz;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StoreCountTop {

    public static List<String[]> readCSV(int year){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\StoreRareData\\StoreCount" + String.valueOf(year) + ".csv");


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

                list.add(lineArr);
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

        List<String[]> list = readCSV(2021); // rare 데이터
        HashMap<String ,String> code = readCSV2();


        HashMap<String, String[]> gu = new HashMap<>();

        for(int i=0; i<list.size(); i++){
            String guName = code.get(list.get(i)[4]);
            String[] rare = list.get(i);
            String key = guName + rare[7];

            if(gu.containsKey(key)){
                String[] tmp = new String[5];
                tmp[0] = guName;
                tmp[1] = rare[6].substring(0,3);
                tmp[2] = rare[5];
                tmp[3] = rare[7];
                tmp[4] = String.valueOf(Integer.parseInt(rare[8])+Integer.parseInt(gu.get(key)[4]));

                gu.replace(key, tmp);
            } else{
                gu.put(key, new String[]{guName, rare[6].substring(0, 3), rare[5], rare[7], rare[8]});
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String key: gu.keySet()){

            String[] tmp = gu.get(key);

            for(int i=0; i<4; i++){
                sb.append("\"" + tmp[i] + "\",");
            }
            sb.append("\"" + Integer.parseInt(tmp[4])/4 + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\StoreCountTop.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
