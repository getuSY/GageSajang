package anlz;

import object.CodeAndGU;
import object.LivingPopulation;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class LivingPopulationStore {

    public static List<LivingPopulation> readCSV(){
        List<LivingPopulation> list = new ArrayList<>();

        File csvFile = new File("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\LivingPopulationStore.csv");
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));

            while((line = br.readLine())!=null){

                String[] lineArr = line.split(",");
                for(int i=0; i<lineArr.length; i++){
                    lineArr[i] = lineArr[i].replaceAll("\"", "");
                }

                list.add(new LivingPopulation(lineArr[0], lineArr[1],
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
                    (int)Float.parseFloat(lineArr[13]),
                    (int)Float.parseFloat(lineArr[14]),
                    (int)Float.parseFloat(lineArr[15]),
                    (int)Float.parseFloat(lineArr[16]),
                    (int)Float.parseFloat(lineArr[17]),
                    (int)Float.parseFloat(lineArr[18]),
                    (int)Float.parseFloat(lineArr[19]),
                    (int)Float.parseFloat(lineArr[20]),
                    (int)Float.parseFloat(lineArr[21]),
                    (int)Float.parseFloat(lineArr[22]),
                    (int)Float.parseFloat(lineArr[23])));
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

        List<LivingPopulation> pop = readCSV();
        HashMap<String ,String> code = readCSV2();

        HashMap<String, LivingPopulation> guList = new HashMap<>();
        HashMap<String, Integer> guCnt = new HashMap<>();


        for(int i=0; i<pop.size(); i++){
            String guName = code.get(pop.get(i).getTrdarCode());
            pop.get(i).setGuName(guName);
            String bungi = pop.get(i).getQuCode();
            LivingPopulation popTmp = pop.get(i);
            //System.out.println(popTmp);

            String key = guName + bungi;
            if(guList.containsKey(key)){
                guCnt.replace(key, guCnt.get(key)+1);
                LivingPopulation tmp = guList.get(key);

                tmp.setTotal(tmp.getTotal() + popTmp.getTotal());
                tmp.setMale(tmp.getMale() + popTmp.getMale());
                tmp.setFemale(tmp.getFemale() + popTmp.getFemale());
                tmp.setAge10(tmp.getAge10() + popTmp.getAge10());
                tmp.setAge20(tmp.getAge20() + popTmp.getAge20());
                tmp.setAge30(tmp.getAge30() + popTmp.getAge30());
                tmp.setAge40(tmp.getAge40() + popTmp.getAge40());
                tmp.setAge50(tmp.getAge50() + popTmp.getAge50());
                tmp.setAge60(tmp.getAge60() + popTmp.getAge60());
                tmp.setTime1(tmp.getTime1() + popTmp.getTime1());
                tmp.setTime2(tmp.getTime2() + popTmp.getTime2());
                tmp.setTime3(tmp.getTime3() + popTmp.getTime3());
                tmp.setTime4(tmp.getTime4() + popTmp.getTime4());
                tmp.setTime5(tmp.getTime5() + popTmp.getTime5());
                tmp.setTime6(tmp.getTime6() + popTmp.getTime6());
                tmp.setMon(tmp.getMon() + popTmp.getMon());
                tmp.setTue(tmp.getTue() + popTmp.getTue());
                tmp.setWed(tmp.getWed() + popTmp.getWed());
                tmp.setThu(tmp.getThu() + popTmp.getThu());
                tmp.setFri(tmp.getFri() + popTmp.getFri());
                tmp.setSat(tmp.getSat() + popTmp.getSat());
                tmp.setSun(tmp.getSun() + popTmp.getSun());

                guList.replace(key, tmp);
            } else{
                guList.put(key, popTmp);
                guCnt.put(key, 1);
            }

            if(guList.containsKey(guName)){
                guCnt.replace(guName, guCnt.get(guName)+1);
                LivingPopulation tmp = guList.get(guName);
                LivingPopulation total = new LivingPopulation();

                total.setGuName(guName);
                total.setQuCode("0");

                total.setTotal(tmp.getTotal() + popTmp.getTotal());
                total.setMale(tmp.getMale() + popTmp.getMale());
                total.setFemale(tmp.getFemale() + popTmp.getFemale());
                total.setAge10(tmp.getAge10() + popTmp.getAge10());
                total.setAge20(tmp.getAge20() + popTmp.getAge20());
                total.setAge30(tmp.getAge30() + popTmp.getAge30());
                total.setAge40(tmp.getAge40() + popTmp.getAge40());
                total.setAge50(tmp.getAge50() + popTmp.getAge50());
                total.setAge60(tmp.getAge60() + popTmp.getAge60());
                total.setTime1(tmp.getTime1() + popTmp.getTime1());
                total.setTime2(tmp.getTime2() + popTmp.getTime2());
                total.setTime3(tmp.getTime3() + popTmp.getTime3());
                total.setTime4(tmp.getTime4() + popTmp.getTime4());
                total.setTime5(tmp.getTime5() + popTmp.getTime5());
                total.setTime6(tmp.getTime6() + popTmp.getTime6());
                total.setMon(tmp.getMon() + popTmp.getMon());
                total.setTue(tmp.getTue() + popTmp.getTue());
                total.setWed(tmp.getWed() + popTmp.getWed());
                total.setThu(tmp.getThu() + popTmp.getThu());
                total.setFri(tmp.getFri() + popTmp.getFri());
                total.setSat(tmp.getSat() + popTmp.getSat());
                total.setSun(tmp.getSun() + popTmp.getSun());

                guList.replace(guName, total);
            } else{
                guList.put(guName, popTmp);
                guCnt.put(guName, 1);
            }
        }

        StringBuilder sb = new StringBuilder();
        for(String gu : guList.keySet()){

            LivingPopulation living = guList.get(gu);
            String bungiNum = null;
            if(gu.contains("1") || gu.contains("2") || gu.contains("3") || gu.contains("4")){
                bungiNum = living.getQuCode();

            } else {
                bungiNum = "0";
            }

            sb.append("\"" + living.getGuName() + "\",");  // 구이름
            sb.append("\"" + bungiNum + "\",");  // 분기 코드
            sb.append("\"" + (int)living.getTotal() + "\",");  // 총생활 인구
            sb.append("\"" + (int)living.getMale() + "\",");  // 남성 인구
            sb.append("\"" + (int)living.getFemale() + "\",");  // 여성 인구
            sb.append("\"" + (int)living.getAge10() + "\",");  // 10대 인구
            sb.append("\"" + (int)living.getAge20() + "\",");  // 20대 인구
            sb.append("\"" + (int)living.getAge30() + "\",");  // 30대 인구
            sb.append("\"" + (int)living.getAge40() + "\",");  // 40대 인구
            sb.append("\"" + (int)living.getAge50() + "\",");  // 50대 인구
            sb.append("\"" + (int)living.getAge60() + "\",");  //60대 이상 인구
            sb.append("\"" + (int)living.getTime1() + "\",");  // 시간대 1
            sb.append("\"" + (int)living.getTime2() + "\",");  // 시간대 2
            sb.append("\"" + (int)living.getTime3() + "\",");  // 시간대 3
            sb.append("\"" + (int)living.getTime4() + "\",");  // 시간대 4
            sb.append("\"" + (int)living.getTime5() + "\",");  // 시간대 5
            sb.append("\"" + (int)living.getTime6() + "\",");  // 시간대 6
            sb.append("\"" + (int)living.getMon() + "\",");  // 월요일
            sb.append("\"" + (int)living.getTue() + "\",");  // 화요일
            sb.append("\"" + (int)living.getWed() + "\",");  // 수요일
            sb.append("\"" + (int)living.getThu() + "\",");  // 목요일
            sb.append("\"" + (int)living.getFri() + "\",");  // 금요일
            sb.append("\"" + (int)living.getSat() + "\",");  // 토요일
            sb.append("\"" + (int)living.getSun() + "\"");  // 일요일
            sb.append("\n");
        }

        //System.out.println(sb.toString());

        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\SSAFY\\Documents\\GitHub\\S07P31E205\\backend\\parse\\src\\main\\resources\\csv\\ResultLivingPopulation.csv", StandardCharsets.UTF_8));
            bw.write(sb.toString());
            bw.flush();
            bw.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

}
