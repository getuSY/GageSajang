package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class StoreDto {
    private Long id;
    private String email;
    private String storeName;
    private String storeAddress;
    private int storeEmployCount;
    private int storeArea;
    private String storeType;
    private String storeNum;
    private int storeSalesDay;
    private int storeSalesMonth;

    public StoreDto(StoreEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.storeAddress = entity.getStoreAddress();
        this.storeArea = entity.getStoreArea();
        this.storeName = entity.getStoreName();
        this.storeNum = entity.getStoreNum();
        this.storeType = entity.getStoreType();
        this.storeEmployCount = entity.getStoreEmployCount();
        this.storeSalesDay = entity.getStoreSalesDay();
        this.storeSalesMonth = entity.getStoreSalesMonth();
    }

    public StoreEntity toEntity(StoreDto dto){
        return StoreEntity.builder()
                .storeName(dto.storeName)
                .storeAddress(dto.storeAddress)
                .storeEmployCount(dto.storeEmployCount)
                .email(dto.email)
                .storeArea(dto.storeArea)
                .storeNum(dto.storeNum)
                .storeSalesDay(dto.storeSalesDay)
                .storeSalesMonth(dto.storeSalesMonth)
                .storeType(dto.storeType)
                .build();
    }
}
