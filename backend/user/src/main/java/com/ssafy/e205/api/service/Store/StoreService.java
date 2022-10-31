package com.ssafy.e205.api.service.Store;

import com.ssafy.e205.api.dto.StoreDto;
import com.ssafy.e205.db.entity.StoreEntity;

public interface StoreService {
    StoreEntity getStoreEntity(String email);
    void saveStoreEntity(StoreEntity storeEntity);
}
