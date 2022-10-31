package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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

    public StoreDto(StoreEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.storeAddress = entity.getStoreAddress();
        this.storeArea = entity.getStoreArea();
        this.storeName = entity.getStoreName();
        this.storeNum = entity.getStoreNum();
        this.storeType = entity.getStoreType();
        this.storeEmployCount = entity.getStoreEmployCount();
    }

    public StoreEntity toEntity(StoreDto dto){
        return StoreEntity.builder()
                .storeName(dto.storeName)
                .storeAddress(dto.storeAddress)
                .storeEmployCount(dto.storeEmployCount)
                .email(dto.email)
                .storeArea(dto.storeArea)
                .storeNum(dto.storeNum)
                .storeType(dto.storeType)
                .build();
    }
}
