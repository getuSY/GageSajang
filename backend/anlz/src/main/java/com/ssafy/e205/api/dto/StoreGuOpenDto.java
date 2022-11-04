package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuOpenDto {

    String guName;
    int open;
    int level;

    public StoreGuOpenDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        open = storeGu.getOpen();
    }

    public StoreGuOpenDto(StoreHinGu storeGu){
        guName = storeGu.getGuName();
        open = storeGu.getOpen();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .open(open)
                .build();
    }

}
