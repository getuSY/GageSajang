package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuStoreDto {

    String guName;
    int store;
    int level;

    public StoreGuStoreDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        store = storeGu.getStore();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .store(store)
                .build();
    }

}
