package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreDto {

    long total;
    long yearAgo;
    long[] gender;
    long[] age;

    public StoreDto(StoreAnlz storeAnlz){
        total = storeAnlz.getStoreTotal();
        yearAgo = storeAnlz.getStoreYearAgo();
        gender = new long[2];
        gender[0] = storeAnlz.getStoreMale();
        gender[1] = storeAnlz.getStoreFemale();
        age = new long[6];
        age[0] = storeAnlz.getStoreAge10();
        age[1] = storeAnlz.getStoreAge20();
        age[2] = storeAnlz.getStoreAge30();
        age[3] = storeAnlz.getStoreAge40();
        age[4] = storeAnlz.getStoreAge50();
        age[5] = storeAnlz.getStoreAge60();
    }
}
