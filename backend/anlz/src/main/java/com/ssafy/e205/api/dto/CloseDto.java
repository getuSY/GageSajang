package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreOpenCloseGu;
import com.ssafy.e205.db.entity.StoreOpenCloseGuCS;
import com.ssafy.e205.db.entity.StoreOpenCloseTop3;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CloseDto {

    int total;
    int[] cs;
    Top3Dto[] top3;

    public CloseDto(StoreOpenCloseGu storeOpenCloseGu, List<StoreOpenCloseGuCS> storeOpenCloseGuCS, StoreOpenCloseTop3 storeOpenCloseTop3){
        total = storeOpenCloseGu.getClose();
        cs = new int[3];
        for(int i=0; i<storeOpenCloseGuCS.size(); i++){
            if(storeOpenCloseGuCS.get(i).getCS().equals("CS1")){
                cs[0] = storeOpenCloseGuCS.get(i).getClose();
            } else if(storeOpenCloseGuCS.get(i).getCS().equals("CS2")){
                cs[1] = storeOpenCloseGuCS.get(i).getClose();
            } else{
                cs[2] = storeOpenCloseGuCS.get(i).getClose();
            }
        }
        top3 = new Top3Dto[3];
        top3[0] = new Top3Dto(storeOpenCloseTop3.getClose1(), storeOpenCloseTop3.getClosePer1());
        top3[1] = new Top3Dto(storeOpenCloseTop3.getClose2(), storeOpenCloseTop3.getClosePer2());
        top3[2] = new Top3Dto(storeOpenCloseTop3.getClose3(), storeOpenCloseTop3.getClosePer3());

    }

}
