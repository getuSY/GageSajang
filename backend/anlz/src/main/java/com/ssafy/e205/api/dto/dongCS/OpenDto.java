package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OpenDto {

    long[] open;
    double[] rate;

    public OpenDto(StoreAnlz storeAnlz){
        open = new long[8];
        open[0] = storeAnlz.getOpen1();
        open[1] = storeAnlz.getOpen2();
        open[2] = storeAnlz.getOpen3();
        open[3] = storeAnlz.getOpen4();
        open[4] = storeAnlz.getOpen5();
        open[5] = storeAnlz.getOpen6();
        open[6] = storeAnlz.getOpen7();
        open[7] = storeAnlz.getOpen8();

        rate = new double[8];
        rate[0] = storeAnlz.getOpenRate1();
        rate[1] = storeAnlz.getOpenRate2();
        rate[2] = storeAnlz.getOpenRate3();
        rate[3] = storeAnlz.getOpenRate4();
        rate[4] = storeAnlz.getOpenRate5();
        rate[5] = storeAnlz.getOpenRate6();
        rate[6] = storeAnlz.getOpenRate7();
        rate[7] = storeAnlz.getOpenRate8();
    }
}
