package com.ssafy.e205.api.service;


import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.db.entity.Assesment;
import com.ssafy.e205.db.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AssetServiceImpl implements AssetService{

    @Autowired
    AssetRepository assest;

    /** @brief : ResultDto, 경영 환경 진단 평균 값들  반환
     *  @date : 2022-11-09
     *  @param : UserDto userDto
     *  @return : Optional<ResultDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public Optional<ResultDto> findByDongNameAndIndustryName(UserDto userDto) {
        System.out.println("before MongoDB");
        System.out.println(userDto.toString());
        Assesment assessmentResult = assest.findByDongNameAndIndustryName(userDto.getDongName(), userDto.getIndustryName());

        System.out.println("after MongoDB");
        System.out.println(assessmentResult.toString());
        StoreDto store = new StoreDto();
        store.setTotal(assessmentResult.getTotal());
        store.setClerk(assessmentResult.getClerk());
        store.setArea(assessmentResult.getArea());
        store.setSimilar(assessmentResult.getSimilar());
        store.setFranchise(assessmentResult.getFranchise());

        SalesDto sales = new SalesDto();
        sales.setSales(assessmentResult.getSales());
        sales.setOrder(assessmentResult.getOrder());

        StatusDto status = new StatusDto();
        status.setOpen(assessmentResult.getOpen());
        status.setClose(assessmentResult.getClose());

        ResultDto result = new ResultDto();
        result.setStore(store);
        result.setSales(sales);
        result.setStatus(status);
        return Optional.of(result);
    }
}

