package com.ssafy.e205.api.service.Store;

import com.ssafy.e205.api.dto.StoreDto;
import com.ssafy.e205.db.entity.StoreEntity;
import com.ssafy.e205.db.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepository repository;

    @Transactional
    @Override
    public StoreEntity getStoreEntity(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public int saveStoreEntity(StoreDto storeDto) {
        repository.save(storeDto.toEntity(storeDto));
        return 1;
    }

    @Override
    public int updateStore(StoreEntity entity) {
        return repository.updateStore(entity.getEmail(), entity.getDongName(), entity.getIndustryCode(), entity.getSales(),entity.getClerk(),entity.getArea());
    }

    @Override
    public List<StoreEntity> getStoreEntityAll() {
        return repository.findAll();
    }

    @Override
    public int deleteByEmail(String email) {
        return repository.deleteByEmail(email);
    }
}
