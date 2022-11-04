package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreSalesMonth;
import com.ssafy.e205.db.entity.StoreSalesVarious;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SalesDto {

    int[] cs;
    int[] week;
    int[] age;
    int[] gender;
    int[] time;

    public SalesDto(List<StoreSalesMonth> storeSalesMonth, StoreSalesVarious storeSalesVarious){
        cs = new int[3];
        for(int i=0; i<storeSalesMonth.size(); i++){
            if(storeSalesMonth.get(i).getCs().equals("CS1")){
                cs[0] = storeSalesMonth.get(i).getSales();
            } else if(storeSalesMonth.get(i).getCs().equals("CS2")){
                cs[1] = storeSalesMonth.get(i).getSales();
            } else{
                cs[2] = storeSalesMonth.get(i).getSales();
            }
        }
        week = new int[7];
        week[0] = storeSalesVarious.getMon();
        week[1] = storeSalesVarious.getTue();
        week[2] = storeSalesVarious.getWed();
        week[3] = storeSalesVarious.getThu();
        week[4] = storeSalesVarious.getFri();
        week[5] = storeSalesVarious.getSat();
        week[6] = storeSalesVarious.getSun();
        gender = new int[2];
        gender[0] = storeSalesVarious.getMale();
        gender[1] = storeSalesVarious.getFemale();
        age = new int[6];
        age[0] = storeSalesVarious.getAge10();
        age[1] = storeSalesVarious.getAge20();
        age[2] = storeSalesVarious.getAge30();
        age[3] = storeSalesVarious.getAge40();
        age[4] = storeSalesVarious.getAge50();
        age[5] = storeSalesVarious.getAge60();
        time = new int[6];
        time[0] = storeSalesVarious.getTime1();
        time[1] = storeSalesVarious.getTime2();
        time[2] = storeSalesVarious.getTime3();
        time[3] = storeSalesVarious.getTime4();
        time[4] = storeSalesVarious.getTime5();
        time[5] = storeSalesVarious.getTime6();

    }
}
