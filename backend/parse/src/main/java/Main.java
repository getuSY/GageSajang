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

        // 상권-점포(점포수, 개업율, 폐업율) CSV 구이름 붙이기
//        StoreCount storeCount = new StoreCount();
//        storeCount.combine();

        // 상권-점포(구별)
//        StoreGu storeGu = new StoreGu();
//        storeGu.sum();

        // 상권-점포(구별+업종코드별)
//        StoreGuCS storeGuCS = new StoreGuCS();
//        storeGuCS.sum();

        // 상권-점포(구별+상권 구분코드별)
//        StoreGuDiv storeGuDiv = new StoreGuDiv();
//        storeGuDiv.sum();

        // 상권-변화지표
//        StoreChange storeChange = new StoreChange();
//        storeChange.getApi();

        // 상권-변화지표 구별로 다이나믹, 정체, 상권확장, 상권축소
//        StoreChangeGu storeChangeGu = new StoreChangeGu();
//        storeChangeGu.combine();

        // 상권 매출 (구별 + 분기별 + 업종별) 월 매출
        StoreSalesMonth storeSalesMonth =new StoreSalesMonth();
        storeSalesMonth.combine();
    }
}
