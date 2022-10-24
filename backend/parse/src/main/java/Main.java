import csv.Api;
import csv.Csv;

import java.util.List;

public class Main {
    public static void main(String[] args){
        Csv csv = new Csv();
        List<List<String>> listCsv = csv.readCSV();
//        for(List<String> list : listCsv){
//            System.out.println(list);
//        }
//        System.out.println("2022".equals(listCsv.get(listCsv.size()-1).get(0).replaceAll("\"","")));
        System.out.println("CSV list size : " + listCsv.size());
        Api api = new Api();
        String apiResult = api.getApi();

    }
}
