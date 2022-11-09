package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CloseDto {

    long[] close;
    double[] rate;

    public CloseDto(StoreAnlz storeAnlz){
        close = new long[8];
        close[0] = storeAnlz.getClose1();
        close[1] = storeAnlz.getClose2();
        close[2] = storeAnlz.getClose3();
        close[3] = storeAnlz.getClose4();
        close[4] = storeAnlz.getClose5();
        close[5] = storeAnlz.getClose6();
        close[6] = storeAnlz.getClose7();
        close[7] = storeAnlz.getClose8();
        
        rate = new double[8];
        rate[0] = storeAnlz.getCloseRate1();
        rate[1] = storeAnlz.getCloseRate2();
        rate[2] = storeAnlz.getCloseRate3();
        rate[3] = storeAnlz.getCloseRate4();
        rate[4] = storeAnlz.getCloseRate5();
        rate[5] = storeAnlz.getCloseRate6();
        rate[6] = storeAnlz.getCloseRate7();
        rate[7] = storeAnlz.getCloseRate8();
    }
}
