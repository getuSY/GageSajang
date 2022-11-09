package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResidentDto {

    long[] total;
    long[] age;
    long[] gender;
    long house;

    public ResidentDto(StoreAnlz storeAnlz){
        total = new long[5];
        total[0] = storeAnlz.getResidentTotal2017();
        total[1] = storeAnlz.getResidentTotal2018();
        total[2] = storeAnlz.getResidentTotal2019();
        total[3] = storeAnlz.getResidentTotal2020();
        total[4] = storeAnlz.getResidentTotal2021();

        age = new long[6];
        age[0] = storeAnlz.getResidentAge10();
        age[1] = storeAnlz.getResidentAge20();
        age[2] = storeAnlz.getResidentAge30();
        age[3] = storeAnlz.getResidentAge40();
        age[4] = storeAnlz.getResidentAge50();
        age[5] = storeAnlz.getResidentAge60();

        gender = new long[2];
        gender[0] = storeAnlz.getResidentMale();
        gender[1] = storeAnlz.getResidentFemale();
        
        house = storeAnlz.getHouse();
    }
}
