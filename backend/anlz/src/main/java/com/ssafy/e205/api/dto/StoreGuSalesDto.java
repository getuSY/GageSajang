package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuSalesDto {

    String guName;
    int sales;
    int level;

    public StoreGuSalesDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        sales = storeGu.getSales();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .sales(sales)
                .build();
    }

}
