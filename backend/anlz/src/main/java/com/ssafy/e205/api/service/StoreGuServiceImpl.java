package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;
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

    @Cacheable(value = "guResident")
    @Override
    public List<StoreGuResidentDto> findAllResident() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuResidentDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getResident()<100000){
                level = 1;
            } else if(storeGu.getResident()<150000){
                level = 2;
            } else if(storeGu.getResident()<200000){
                level = 3;
            } else if(storeGu.getResident()<250000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuResidentDto(storeGu.getGuName(), storeGu.getResident(), level));
        }

        return result;
    }

    @Cacheable(value = "guStore")
    @Override
    public List<StoreGuStoreDto> findAllStore() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuStoreDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getStore()<10000){
                level = 1;
            } else if(storeGu.getStore()<15000){
                level = 2;
            } else if(storeGu.getStore()<20000){
                level = 3;
            } else if(storeGu.getStore()<40000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuStoreDto(storeGu.getGuName(), storeGu.getStore(), level));
        }

        return result;
    }

    @Cacheable(value = "guOpen")
    @Override
    public List<StoreGuOpenDto> findAllOpen() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuOpenDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getOpen()<7){
                level = 1;
            } else if(storeGu.getOpen()<9){
                level = 2;
            } else if(storeGu.getOpen()<11){
                level = 3;
            } else if(storeGu.getOpen()<13){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuOpenDto(storeGu.getGuName(), storeGu.getOpen(), level));
        }

        return result;
    }

    @Cacheable(value = "guClose")
    @Override
    public List<StoreGuCloseDto> findAllClose() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuCloseDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getClose()<9){
                level = 1;
            } else if(storeGu.getClose()<10){
                level = 2;
            } else if(storeGu.getClose()<11){
                level = 3;
            } else if(storeGu.getClose()<12){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuCloseDto(storeGu.getGuName(), storeGu.getClose(), level));
        }

        return result;
    }

    @Cacheable(value = "guSales")
    @Override
    public List<StoreGuSalesDto> findAllSales() {
        List<StoreGu> list = repository.findAll();

        List<StoreGuSalesDto> result = new ArrayList<>();
        for(StoreGu storeGu : list){
            int level = 0;
            if(storeGu.getSales()<100000000){
                level = 1;
            } else if(storeGu.getSales()<150000000){
                level = 2;
            } else if(storeGu.getSales()<250000000){
                level = 3;
            } else if(storeGu.getSales()<350000000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuSalesDto(storeGu.getGuName(), storeGu.getSales(), level));
        }

        return result;
    }
}
