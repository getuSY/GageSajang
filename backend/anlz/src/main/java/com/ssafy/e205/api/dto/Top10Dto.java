package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreTop10;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Top10Dto {

    String[] commercial;
    String[] sectors;
    String[] close;
    String[] salesDong;
    String[] salesCS;

    public Top10Dto(StoreTop10 storeTop10){
        commercial = storeTop10.getCommercial();
        sectors = storeTop10.getSectors();
        close = storeTop10.getClose();
        salesDong = storeTop10.getSalesDong();
        salesCS = storeTop10.getSalesCS();
    }

}
