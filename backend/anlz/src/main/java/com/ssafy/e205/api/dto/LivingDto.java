package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreLivingPopulation;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LivingDto {

    int total;
    int[] gender;
    int[] age;
    int[] quarter;
    int[] week;
    int[] time;

    public LivingDto(StoreLivingPopulation storeLivingPopulation){
        total = storeLivingPopulation.getTotal();
        gender = new int[2];
        gender[0] = storeLivingPopulation.getMale();
        gender[1] = storeLivingPopulation.getFemale();
        age = new int[6];
        age[0] = storeLivingPopulation.getAge10();
        age[1] = storeLivingPopulation.getAge20();
        age[2] = storeLivingPopulation.getAge30();
        age[3] = storeLivingPopulation.getAge40();
        age[4] = storeLivingPopulation.getAge50();
        age[5] = storeLivingPopulation.getAge60();
        quarter = new int[4];
        quarter[0] = storeLivingPopulation.getQuarter1();
        quarter[1] = storeLivingPopulation.getQuarter2();
        quarter[2] = storeLivingPopulation.getQuarter3();
        quarter[3] = storeLivingPopulation.getQuarter4();
        week = new int[7];
        week[0] = storeLivingPopulation.getMon();
        week[1] = storeLivingPopulation.getTue();
        week[2] = storeLivingPopulation.getWed();
        week[3] = storeLivingPopulation.getThu();
        week[4] = storeLivingPopulation.getFri();
        week[5] = storeLivingPopulation.getSat();
        week[6] = storeLivingPopulation.getSun();
        time = new int[6];
        time[0] = storeLivingPopulation.getTime1();
        time[1] = storeLivingPopulation.getTime2();
        time[2] = storeLivingPopulation.getTime3();
        time[3] = storeLivingPopulation.getTime4();
        time[4] = storeLivingPopulation.getTime5();
        time[5] = storeLivingPopulation.getTime6();

    }

}
