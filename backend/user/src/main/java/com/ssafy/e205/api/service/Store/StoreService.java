package com.ssafy.e205.api.service.Store;

import com.ssafy.e205.api.dto.StoreDto;
import com.ssafy.e205.db.entity.StoreEntity;

import java.util.List;

public interface StoreService {
    StoreEntity getStoreEntity(String email);
    int saveStoreEntity(StoreDto storeDto);
    List<StoreEntity> getStoreEntityAll();
    int deleteByEmail(String email);
}
