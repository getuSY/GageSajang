import anlz.*;
import csv.Api;
import csv.Csv;
import object.CodeAndGU;
import object.LivingPopulation;
import object.ResidentPopulation;

import java.util.List;

public class Main {
    public static void main(String[] args){

        // 상권-생활인구(유동인구) API -> CSV
//        StoreLivingPopulation storeLivingPopulation = new StoreLivingPopulation();
//        storeLivingPopulation.getApi();

        // 상권-생활인구(유동인구) CSV -> 최종 정리본 CSV
//        LivingPopulationStore livingPopulationStore = new LivingPopulationStore();
//        livingPopulationStore.combine();

        // 상권-상주인구(거주인구) API -> CSV
//        StoreResidentPopulation storeResidentPopulation = new StoreResidentPopulation();
//        storeResidentPopulation.getApi();

        // 상권-상주인구(거주인구) CSV -> 최종 정리본 CSV
//        ResidentPopulationStore residentPopulationStore = new ResidentPopulationStore();
//        residentPopulationStore.combine();

        // 상권-점포(점포수, 개업율, 폐업율) CSV 5개년 합병 및 구이름 붙이기
//        StoreCount storeCount = new StoreCount();
//        storeCount.combine();

        // 상권-점포(구별)
        StoreGu storeGu = new StoreGu();
        storeGu.sum();

    }
}
