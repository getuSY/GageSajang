package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import com.ssafy.e205.db.repository.StoreHinGuRepository;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreHinGuSalesDto {

    String guName;
    long sales;
    int level;

    public StoreHinGuSalesDto(StoreHinGu storeGu){
        guName = storeGu.getGuName();
        sales = storeGu.getSales();
    }

}
