package com.ssafy.e205.api.service.Store;

import com.ssafy.e205.db.entity.StoreEntity;
import com.ssafy.e205.db.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepository repository;

    @Override
    public StoreEntity getStoreEntity(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public void saveStoreEntity(StoreEntity storeEntity) {
        repository.save(storeEntity);
    }
}
