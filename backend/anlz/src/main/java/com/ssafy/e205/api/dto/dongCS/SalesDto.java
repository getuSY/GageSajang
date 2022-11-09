package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SalesDto {

    long[] total;
    String[] top3;
    long[] week;
    long[] time;
    long[] age;
    long[] gender;

    public SalesDto(StoreAnlz storeAnlz){
        total = new long[5];
        total[0] = storeAnlz.getSales2017();
        total[1] = storeAnlz.getSales2018();
        total[2] = storeAnlz.getSales2019();
        total[3] = storeAnlz.getSales2020();
        total[4] = storeAnlz.getSales2021();

        top3 = new String[3];
        top3[0] = storeAnlz.getSalesTop1();
        top3[1] = storeAnlz.getSalesTop2();
        top3[2] = storeAnlz.getSalesTop3();

        week = new long[7];
        week[0] = storeAnlz.getSalesMon();
        week[1] = storeAnlz.getSalesTue();
        week[2] = storeAnlz.getSalesWed();
        week[3] = storeAnlz.getSalesThu();
        week[4] = storeAnlz.getSalesFri();
        week[5] = storeAnlz.getSalesSat();
        week[6] = storeAnlz.getSalesSun();

        time = new long[6];
        time[0] = storeAnlz.getSalesTime1();
        time[1] = storeAnlz.getSalesTime2();
        time[2] = storeAnlz.getSalesTime3();
        time[3] = storeAnlz.getSalesTime4();
        time[4] = storeAnlz.getSalesTime5();
        time[5] = storeAnlz.getSalesTime6();

        age = new long[6];
        age[0] = storeAnlz.getSalesAge10();
        age[1] = storeAnlz.getSalesAge20();
        age[2] = storeAnlz.getSalesAge30();
        age[3] = storeAnlz.getSalesAge40();
        age[4] = storeAnlz.getSalesAge50();
        age[5] = storeAnlz.getSalesAge60();

        gender = new long[2];
        gender[0] = storeAnlz.getSalesMale();
        gender[1] = storeAnlz.getSalesFemale();
    }
}
