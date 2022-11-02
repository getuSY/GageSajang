package anlz;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StoreHinSalesMonth {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\SalesRareData\\SalesHin2021.csv");


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

//                for(int i=0; i<lineArr.length; i++){
//                    System.out.print(lineArr[i]+" ");
//                }
//                System.out.println();
                list.add(new String[]{lineArr[4],lineArr[8]});
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


        for(int i=0; i<list.size(); i++){
            String guName = code.get(list.get(i)[0]);
            String[] rare = list.get(i);
            String key = guName;

//            System.out.println(rare[3]);

            if(gu.containsKey(key)){
                String[] tmp = new String[2];

                tmp[0] = guName;

                Long rare3 = 0L;
                if(rare[1].contains("E+11")){
                    int temp = (int)(Double.parseDouble(rare[1].substring(0, rare[1].length()-4))*100000);
                    //System.out.println(rare[3]);
                    rare3 = temp * 1000000L;
                } else{
                    rare3 = Long.parseLong(rare[1]);
                }
                tmp[1] = String.valueOf(rare3 + Long.parseLong(gu.get(key)[1]));
//                for(int j=0; j<rare[3].length(); j++){
//                    if(!Character.isDigit(rare[3].charAt(j))) System.out.println(rare[3] + "의 " + j + "번째가 아님");
//                }

                gu.replace(key, tmp);

            } else {
                Long tmp = 0L;
                if(rare[1].contains("E+11")){
                    int temp = (int)(Double.parseDouble(rare[1].substring(0, 7))*100000);
                    tmp = temp * 1000000L;

                } else{
                    tmp = Long.parseLong(rare[1]);
                }
                gu.put(key, new String[]{guName, String.valueOf(tmp)});
             //   System.out.println(rare[3]);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String key: gu.keySet()){

            String[] tmp = gu.get(key);

            sb.append("\"" + tmp[0] + "\",");
            sb.append("\"" + Long.parseLong(tmp[1])/12 + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\hinterland\\ResultSalesMonthHin.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}
