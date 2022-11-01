package anlz;

import object.ResidentPopulation;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ResultLivingPopulation {

    public static List<String[]> readCSV(){
        List<String[]> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultLivingPopulation.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++) {
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

    public void combine(){

        List<String[]> pop = readCSV();

        HashMap<String, String[]> gu = new HashMap<>();


        for(int i=0; i<pop.size(); i++){
            String[] rare = pop.get(i);
            String guName = rare[0];

            if(rare[1].equals("0")) {
                String[] tmp = new String[27];
                tmp[0] = guName;
                for (int j = 1; j < 23; j++) {
                    tmp[j] = String.valueOf(Integer.parseInt(rare[j + 1]) / 4);
                    //System.out.print(tmp[j]+" ");
                }
                //System.out.println();
                gu.put(guName, tmp);
            } else if(rare[1].equals("1")){
                String[] tmp = gu.get(guName);
                tmp[23] = rare[2];
                gu.replace(guName, tmp);
            } else if(rare[1].equals("2")){
                String[] tmp = gu.get(guName);
                tmp[24] = rare[2];
                gu.replace(guName, tmp);
            } else if(rare[1].equals("3")){
                String[] tmp = gu.get(guName);
                tmp[25] = rare[2];
                gu.replace(guName, tmp);
            } else{
                String[] tmp = gu.get(guName);
                tmp[26] = rare[2];
                gu.replace(guName, tmp);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String guName : gu.keySet()){

            String[] tmp = gu.get(guName);

            for(int i=0; i<26; i++){
                sb.append("\"" + tmp[i] + "\",");
            }
            sb.append("\"" + tmp[26] + "\"");  // 비아파트 인구
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultFinalLiving.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
