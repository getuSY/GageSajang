package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreDto {

    int total;
    int[] cs;
    int[] div;
    String[] cs1Top3;
    String[] cs2Top3;
    String[] cs3Top3;

    public StoreDto(StoreOpenCloseGu storeOpenCloseGu, List<StoreOpenCloseGuCS> storeOpenCloseGuCS, List<StoreOpenCloseGuDiv> storeOpenCloseGuDiv, StoreCountTop3 storeCountTop3){
        total = storeOpenCloseGu.getStore();
        cs = new int[3];
        for(int i=0; i<storeOpenCloseGuCS.size(); i++){
            if(storeOpenCloseGuCS.get(i).getCS().equals("CS1")){
                cs[0] = storeOpenCloseGuCS.get(i).getStore();
            } else if(storeOpenCloseGuCS.get(i).getCS().equals("CS2")){
                cs[1] = storeOpenCloseGuCS.get(i).getStore();
            } else{
                cs[2] = storeOpenCloseGuCS.get(i).getStore();
            }
        }
        div = new int[4];
        for(int i=0; i<storeOpenCloseGuDiv.size(); i++){
            if(storeOpenCloseGuDiv.get(i).getDiv().equals("골목상권")){
                div[0] = storeOpenCloseGuDiv.get(i).getStore();
            } else if(storeOpenCloseGuDiv.get(i).getDiv().equals("전통시장")){
                div[1] = storeOpenCloseGuDiv.get(i).getStore();
            } else if(storeOpenCloseGuDiv.get(i).getDiv().equals("관광특구")){
                div[2] = storeOpenCloseGuDiv.get(i).getStore();
            } else{
                div[3] = storeOpenCloseGuDiv.get(i).getStore();
            }
        }
        cs1Top3 = new String[3];
        cs1Top3[0] = storeCountTop3.getCS11();
        cs1Top3[1] = storeCountTop3.getCS12();
        cs1Top3[2] = storeCountTop3.getCS13();
        cs2Top3 = new String[3];
        cs2Top3[0] = storeCountTop3.getCS21();
        cs2Top3[1] = storeCountTop3.getCS22();
        cs2Top3[2] = storeCountTop3.getCS23();
        cs3Top3 = new String[3];
        cs3Top3[0] = storeCountTop3.getCS31();
        cs3Top3[1] = storeCountTop3.getCS32();
        cs3Top3[2] = storeCountTop3.getCS33();


    }
}
