package anlz;

import object.LivingPopulation;
import object.ResidentPopulation;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ResidentPopulationStore {

    public static List<ResidentPopulation> readCSV(){
        List<ResidentPopulation> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResidentPopulationStore.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new ResidentPopulation(lineArr[0], lineArr[1],
                    (int)Float.parseFloat(lineArr[2]),
                    (int)Float.parseFloat(lineArr[3]),
                    (int)Float.parseFloat(lineArr[4]),
                    (int)Float.parseFloat(lineArr[5]),
                    (int)Float.parseFloat(lineArr[6]),
                    (int)Float.parseFloat(lineArr[7]),
                    (int)Float.parseFloat(lineArr[8]),
                    (int)Float.parseFloat(lineArr[9]),
                    (int)Float.parseFloat(lineArr[10]),
                    (int)Float.parseFloat(lineArr[11]),
                    (int)Float.parseFloat(lineArr[12]),
                    (int)Float.parseFloat(lineArr[13])));
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

        List<ResidentPopulation> pop = readCSV();
        HashMap<String ,String> code = readCSV2();

        HashMap<String, ResidentPopulation> guList = new HashMap<>();
        HashMap<String, Integer> guCnt = new HashMap<>();


        for(int i=0; i<pop.size(); i++){
            String guName = code.get(pop.get(i).getTrdarCode());
            pop.get(i).setGuName(guName);
            ResidentPopulation popTmp = pop.get(i);
            //System.out.println(popTmp);

            if(guList.containsKey(guName)){
                guCnt.replace(guName, guCnt.get(guName)+1);
                ResidentPopulation tmp = guList.get(guName);
                ResidentPopulation total = new ResidentPopulation();

                total.setGuName(guName);

                total.setTotal(tmp.getTotal() + popTmp.getTotal());
                total.setMale(tmp.getMale() + popTmp.getMale());
                total.setFemale(tmp.getFemale() + popTmp.getFemale());
                total.setAge10(tmp.getAge10() + popTmp.getAge10());
                total.setAge20(tmp.getAge20() + popTmp.getAge20());
                total.setAge30(tmp.getAge30() + popTmp.getAge30());
                total.setAge40(tmp.getAge40() + popTmp.getAge40());
                total.setAge50(tmp.getAge50() + popTmp.getAge50());
                total.setAge60(tmp.getAge60() + popTmp.getAge60());
                total.setHouse(tmp.getHouse() + popTmp.getHouse());
                total.setApt(tmp.getApt() + popTmp.getApt());
                total.setNonApt(tmp.getNonApt() + popTmp.getNonApt());

                guList.replace(guName, total);
            } else{
                guList.put(guName, popTmp);
                guCnt.put(guName, 1);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String gu : guList.keySet()){

            ResidentPopulation living = guList.get(gu);
            String bungiNum = null;

            sb.append("\"" + living.getGuName() + "\",");  // 구이름
            sb.append("\"" + (int)living.getTotal()/4 + "\",");  // 총생활 인구
            sb.append("\"" + (int)living.getMale()/4 + "\",");  // 남성 인구
            sb.append("\"" + (int)living.getFemale()/4 + "\",");  // 여성 인구
            sb.append("\"" + (int)living.getAge10()/4 + "\",");  // 10대 인구
            sb.append("\"" + (int)living.getAge20()/4 + "\",");  // 20대 인구
            sb.append("\"" + (int)living.getAge30()/4 + "\",");  // 30대 인구
            sb.append("\"" + (int)living.getAge40()/4 + "\",");  // 40대 인구
            sb.append("\"" + (int)living.getAge50()/4 + "\",");  // 50대 인구
            sb.append("\"" + (int)living.getAge60()/4 + "\",");  //60대 이상 인구
            sb.append("\"" + (int)living.getHouse()/4 + "\",");  // 총가구 인구
            sb.append("\"" + (int)living.getApt()/4 + "\",");  // 아파트 인구
            sb.append("\"" + (int)living.getNonApt()/4 + "\"");  // 비아파트 인구
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultResidentPopulation.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
