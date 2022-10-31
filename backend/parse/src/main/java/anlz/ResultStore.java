package anlz;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ResultStore {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultLivingPopulation.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                if(lineArr[1].equals("0")){
                    list.add(new String[]{lineArr[0], lineArr[2]});
                }
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

    public static List<String[]> readCSV2(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultResidentPopulation.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new String[]{lineArr[0], lineArr[1]});
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

    public static List<String[]> readCSV3(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultStoreGu.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new String[]{lineArr[0], lineArr[2], lineArr[3], lineArr[4]});
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

    public static List<String[]> readCSV4(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultSalesMonth.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new String[]{lineArr[0], lineArr[3]});
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


    public void combine(){

        List<String[]> livingList = readCSV(); // 생활인구
        List<String[]> residentList = readCSV2(); // 거주인구
        List<String[]> storeList = readCSV3(); // 점포, 개업, 폐업
        List<String[]> salesList = readCSV4(); // 매출

        Map<String, String[]> result = new HashMap<>();


        for(int i=0; i<livingList.size(); i++){

            String[] rare = livingList.get(i);

            String[] tmp = new String[7];
            tmp[0] = rare[0];
            tmp[1] = String.valueOf(Integer.parseInt(rare[1])/4);
            result.put(rare[0], tmp);
        }

        for(int i=0; i<residentList.size(); i++){

            String[] rare = residentList.get(i);

            String[] tmp = result.get(rare[0]);
            tmp[2] = rare[1];
            result.replace(rare[0], tmp);
        }

        for(int i=0; i<storeList.size(); i++){

            String[] rare = storeList.get(i);

            String[] tmp = result.get(rare[0]);
            tmp[3] = rare[1];
            tmp[4] = rare[2];
            tmp[5] = rare[3];

            result.replace(rare[0], tmp);
        }

        for(int i=0; i<salesList.size(); i++){

            String[] rare = salesList.get(i);

            String[] tmp = result.get(rare[0]);
            tmp[6] = tmp[6]==null ? rare[1] : String.valueOf(Long.parseLong(tmp[6]) + Long.parseLong(rare[1]));

            result.replace(rare[0], tmp);
        }

        StringBuilder sb = new StringBuilder();
        for(String key: result.keySet()){

            String[] tmp = result.get(key);

            for(int i=0; i<6; i++){
                sb.append("\"" + tmp[i] + "\",");
            }
            sb.append("\"" + Long.parseLong(tmp[6])/12 + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultStore.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}
