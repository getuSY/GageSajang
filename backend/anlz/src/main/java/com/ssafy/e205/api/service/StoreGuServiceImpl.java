package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.StoreGuLivingDto;
import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.repository.StoreGuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoreGuServiceImpl implements StoreGuService{

    @Autowired
    StoreGuRepository repository;

    @Cacheable(value = "guLiving")
    @Override
    public List<StoreGuLivingDto> findAllLiving() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuLivingDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getLiving()<40000000){
                level = 1;
            } else if(storeGu.getLiving()<50000000){
                level = 2;
            } else if(storeGu.getLiving()<60000000){
                level = 3;
            } else if(storeGu.getLiving()<70000000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuLivingDto(storeGu.getGuName(), storeGu.getLiving(), level));
        }

        return result;
    }
}
