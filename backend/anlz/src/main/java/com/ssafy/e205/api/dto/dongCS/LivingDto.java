package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LivingDto {

    long[] total;
    String[] top3;
    long[] week;
    long[] time;
    long[] age;
    long[] gender;

    public LivingDto(StoreAnlz storeAnlz){
        total = new long[5];
        total[0] = storeAnlz.getLivingTotal2017();
        total[1] = storeAnlz.getLivingTotal2018();
        total[2] = storeAnlz.getLivingTotal2019();
        total[3] = storeAnlz.getLivingTotal2020();
        total[4] = storeAnlz.getLivingTotal2021();

        top3 = new String[3];
        top3[0] = storeAnlz.getLivingTop1();
        top3[1] = storeAnlz.getLivingTop2();
        top3[2] = storeAnlz.getLivingTop3();

        week = new long[7];
        week[0] = storeAnlz.getLivingMon();
        week[1] = storeAnlz.getLivingTue();
        week[2] = storeAnlz.getLivingWed();
        week[3] = storeAnlz.getLivingThu();
        week[4] = storeAnlz.getLivingFri();
        week[5] = storeAnlz.getLivingSat();
        week[6] = storeAnlz.getLivingSun();

        time = new long[6];
        time[0] = storeAnlz.getLivingTime1();
        time[1] = storeAnlz.getLivingTime2();
        time[2] = storeAnlz.getLivingTime3();
        time[3] = storeAnlz.getLivingTime4();
        time[4] = storeAnlz.getLivingTime5();
        time[5] = storeAnlz.getLivingTime6();

        age = new long[6];
        age[0] = storeAnlz.getLivingAge10();
        age[1] = storeAnlz.getLivingAge20();
        age[2] = storeAnlz.getLivingAge30();
        age[3] = storeAnlz.getLivingAge40();
        age[4] = storeAnlz.getLivingAge50();
        age[5] = storeAnlz.getLivingAge60();

        gender = new long[2];
        gender[0] = storeAnlz.getLivingMale();
        gender[1] = storeAnlz.getLivingFemale();
    }
}
