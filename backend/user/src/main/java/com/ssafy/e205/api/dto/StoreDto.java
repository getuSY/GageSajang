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
    private String storeAddressAdministrative;
    private String storeAddressCourt;
    private int storeEmployCount;
    private int storeArea;
    private String storeTypeCode;
    private String storeTypeName;
    private String storeNum;

    public StoreDto(StoreEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.storeAddressAdministrative = entity.getStoreAddressAdministrative();
        this.storeAddressCourt = entity.getStoreAddressCourt();
        this.storeArea = entity.getStoreArea();
        this.storeName = entity.getStoreName();
        this.storeNum = entity.getStoreNum();
        this.storeTypeCode = entity.getStoreTypeCode();
        this.storeTypeName = entity.getStoreTypeName();
        this.storeEmployCount = entity.getStoreEmployCount();
    }

    public StoreEntity toEntity(StoreDto dto){
        return StoreEntity.builder()
                .storeName(dto.storeName)
                .storeAddressAdministrative(dto.storeAddressAdministrative)
                .storeAddressCourt(dto.storeAddressCourt)
                .storeEmployCount(dto.storeEmployCount)
                .email(dto.email)
                .storeArea(dto.storeArea)
                .storeNum(dto.storeNum)
                .storeTypeCode(dto.storeTypeCode)
                .storeTypeName(dto.storeTypeName)
                .build();
    }
}
