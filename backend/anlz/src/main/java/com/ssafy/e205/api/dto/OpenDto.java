package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OpenDto {

    int total;
    int[] cs;
    Top3Dto[] top3;

    public OpenDto(StoreOpenCloseGu storeOpenCloseGu, List<StoreOpenCloseGuCS> storeOpenCloseGuCS, StoreOpenCloseTop3 storeOpenCloseTop3){
        total = storeOpenCloseGu.getOpen();
        cs = new int[3];
        for(int i=0; i<storeOpenCloseGuCS.size(); i++){
            if(storeOpenCloseGuCS.get(i).getCS().equals("CS1")){
                cs[0] = storeOpenCloseGuCS.get(i).getOpen();
            } else if(storeOpenCloseGuCS.get(i).getCS().equals("CS2")){
                cs[1] = storeOpenCloseGuCS.get(i).getOpen();
            } else{
                cs[2] = storeOpenCloseGuCS.get(i).getOpen();
            }
        }
        top3 = new Top3Dto[3];
        top3[0] = new Top3Dto(storeOpenCloseTop3.getOpen1(), storeOpenCloseTop3.getOpenPer1());
        top3[1] = new Top3Dto(storeOpenCloseTop3.getOpen2(), storeOpenCloseTop3.getOpenPer2());
        top3[2] = new Top3Dto(storeOpenCloseTop3.getOpen3(), storeOpenCloseTop3.getOpenPer3());

    }

}
