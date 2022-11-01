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

    }

}
