package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuCloseDto {

    String guName;
    int close;
    int level;

    public StoreGuCloseDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        close = storeGu.getClose();
    }

    public StoreGuCloseDto(StoreHinGu storeGu){
        guName = storeGu.getGuName();
        close = storeGu.getClose();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .close(close)
                .build();
    }

}
