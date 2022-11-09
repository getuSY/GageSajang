package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HinterlandDto {

    long living;
    long work;
    long resident;
    long[] age;
    long[] gender;

    public HinterlandDto(StoreAnlz storeAnlz){
        
        living = storeAnlz.getHinLivingToTal();
        work = storeAnlz.getHinWorkTotal();
        resident = storeAnlz.getHinResidentTotal();

        age = new long[6];
        age[0] = storeAnlz.getHinResidentAge10();
        age[1] = storeAnlz.getHinResidentAge20();
        age[2] = storeAnlz.getHinResidentAge30();
        age[3] = storeAnlz.getHinResidentAge40();
        age[4] = storeAnlz.getHinResidentAge50();
        age[5] = storeAnlz.getHinResidentAge60();

        gender = new long[2];
        gender[0] = storeAnlz.getHinResidentMale();
        gender[1] = storeAnlz.getHinResidentFemal();
    }
}
