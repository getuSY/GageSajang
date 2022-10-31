package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuLivingDto {

    String guName;
    int living;
    int level;

    public StoreGuLivingDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        living = storeGu.getLiving();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .living(living)
                .build();
    }

}
