package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreGu;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoreGuResidentDto {

    String guName;
    int resident;
    int level;

    public StoreGuResidentDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        resident = storeGu.getResident();
    }

    public StoreGu toEntity(){
        return StoreGu.builder()
                .guName(guName)
                .resident(resident)
                .build();
    }

}
