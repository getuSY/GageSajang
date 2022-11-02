package anlz;

import object.LivingPopulation;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class LivingPopulationStoreHin {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\hinterland\\LivingPopulationStoreHin.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new String[]{lineArr[0], String.valueOf((int)Float.parseFloat(lineArr[2]))});
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

        List<String[]> pop = readCSV();
        HashMap<String ,String> code = readCSV2();

        HashMap<String, String[]> guList = new HashMap<>();
        HashMap<String, Integer> guCnt = new HashMap<>();


        for(int i=0; i<pop.size(); i++){
            String guName = code.get(pop.get(i)[0]);
            String[] rare = pop.get(i);
            //System.out.println(popTmp);

            String key = guName;
            if(guList.containsKey(key)){
                guList.replace(key, new String[]{guName, String.valueOf(Integer.parseInt(rare[1]) + Integer.parseInt(guList.get(guName)[1]))});
            } else{
                guList.put(key, rare);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String gu : guList.keySet()){

            String[] tmp = guList.get(gu);

            sb.append("\"" + tmp[0] + "\",");  // 구이름
            sb.append("\"" + Integer.parseInt(tmp[1])/4 + "\"");
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\hinterland\\ResultHinLivingPopulation.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
