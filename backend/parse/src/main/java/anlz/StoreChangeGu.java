package anlz;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StoreChangeGu {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\StoreChange.csv");


        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

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

        List<String[]> list = readCSV(); // rare 데이터
        List<String[]> result = new ArrayList<>();
        HashMap<String ,String> code = readCSV2();

        HashMap<String, String[]> gu = new HashMap<>();
        HashMap<String, Integer> cnt = new HashMap<>();


        for(int i=0; i<list.size(); i++){
            String guName = code.get(list.get(i)[0]);
            String[] rare = list.get(i);

            if(gu.containsKey(guName)){
                String[] tmp = new String[5];
                tmp[0] = guName;
                tmp[1] = String.valueOf(Integer.parseInt(rare[1]) + Integer.parseInt(gu.get(guName)[1]));
                tmp[2] = String.valueOf(Integer.parseInt(rare[2]) + Integer.parseInt(gu.get(guName)[2]));
                tmp[3] = rare[3];
                tmp[4] = rare[4];

                gu.replace(guName, tmp);
                cnt.replace(guName, cnt.get(guName)+1);

            } else {
                gu.put(guName, new String[]{guName, rare[1], rare[2], rare[3], rare[4]});
                cnt.put(guName, 1);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String key : gu.keySet()){

            String[] change = gu.get(key);
            int openCnt = (int)Float.parseFloat(change[1])/cnt.get(key);
            int closeCnt = (int)Float.parseFloat(change[2])/cnt.get(key);
            char open = openCnt>Integer.parseInt(change[3])? 'H' : 'L';
            char close = closeCnt>Integer.parseInt(change[4])? 'H' : 'L';

            sb.append("\"" + change[0] + "\",");
            if(open=='H'){
                if(close=='H'){
                    sb.append("\"정체\"");
                } else{
                    sb.append("\"상권축소\"");
                }
            } else{
                if(close=='H'){
                    sb.append("\"상권확장\"");
                } else{
                    sb.append("\"다이나믹\"");
                }
            }
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultStoreChange.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}
