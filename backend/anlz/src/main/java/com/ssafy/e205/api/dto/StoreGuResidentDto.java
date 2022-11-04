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
public class StoreGuResidentDto {

    String guName;
    int resident;
    int level;

    public StoreGuResidentDto(StoreGu storeGu){
        guName = storeGu.getGuName();
        resident = storeGu.getResident();
    }

    public StoreGuResidentDto(StoreHinGu storeGu){
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
