package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import com.ssafy.e205.db.repository.StoreGuRepository;
import com.ssafy.e205.db.repository.StoreHinGuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoreHinGuServiceImpl implements StoreHinGuService{

    @Autowired
    StoreHinGuRepository repository;

    @Cacheable(value = "guLivingHin")
    @Override
    public List<StoreGuLivingDto> findAllLiving() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreGuLivingDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getLiving()/90<1400000){
                level = 1;
            } else if(storeGu.getLiving()/90<2000000){
                level = 2;
            } else if(storeGu.getLiving()/90<2500000){
                level = 3;
            } else if(storeGu.getLiving()/90<3000000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuLivingDto(storeGu.getGuName(), storeGu.getLiving()/90, level));
        }

        return result;
    }

    @Cacheable(value = "guResidentHin")
    @Override
    public List<StoreGuResidentDto> findAllResident() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreGuResidentDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getResident()<600000){
                level = 1;
            } else if(storeGu.getResident()<800000){
                level = 2;
            } else if(storeGu.getResident()<900000){
                level = 3;
            } else if(storeGu.getResident()<1000000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuResidentDto(storeGu.getGuName(), storeGu.getResident(), level));
        }

        return result;
    }

    @Cacheable(value = "guStoreHin")
    @Override
    public List<StoreGuStoreDto> findAllStore() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreGuStoreDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getStore()<30000){
                level = 1;
            } else if(storeGu.getStore()<40000){
                level = 2;
            } else if(storeGu.getStore()<50000){
                level = 3;
            } else if(storeGu.getStore()<60000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuStoreDto(storeGu.getGuName(), storeGu.getStore(), level));
        }

        return result;
    }

    @Cacheable(value = "guOpenHin")
    @Override
    public List<StoreGuOpenDto> findAllOpen() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreGuOpenDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getOpen()<8){
                level = 1;
            } else if(storeGu.getOpen()<9){
                level = 2;
            } else if(storeGu.getOpen()<10){
                level = 3;
            } else if(storeGu.getOpen()<11){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuOpenDto(storeGu.getGuName(), storeGu.getOpen(), level));
        }

        return result;
    }

    @Cacheable(value = "guCloseHin")
    @Override
    public List<StoreGuCloseDto> findAllClose() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreGuCloseDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getClose()<8){
                level = 1;
            } else if(storeGu.getClose()<9){
                level = 2;
            } else if(storeGu.getClose()<10){
                level = 3;
            } else if(storeGu.getClose()<11){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreGuCloseDto(storeGu.getGuName(), storeGu.getClose(), level));
        }

        return result;
    }

    @Cacheable(value = "guSalesHin")
    @Override
    public List<StoreHinGuSalesDto> findAllSales() {
        List<StoreHinGu> list = repository.findAll();

        List<StoreHinGuSalesDto> result = new ArrayList<>();
        for(StoreHinGu storeGu : list){
            int level = 0;
            if(storeGu.getSales()<12000000){
                level = 1;
            } else if(storeGu.getSales()<14000000){
                level = 2;
            } else if(storeGu.getSales()<16000000){
                level = 3;
            } else if(storeGu.getSales()<20000000){
                level = 4;
            } else {
                level = 5;
            }
            result.add(new StoreHinGuSalesDto(storeGu.getGuName(), storeGu.getSales(), level));
        }

        return result;
    }
}
