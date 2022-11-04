package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;

import java.util.List;

public interface StoreHinGuService {

    List<StoreGuLivingDto> findAllLiving();
    List<StoreGuResidentDto> findAllResident();
    List<StoreGuStoreDto> findAllStore();
    List<StoreGuOpenDto> findAllOpen();
    List<StoreGuCloseDto> findAllClose();
    List<StoreHinGuSalesDto> findAllSales();
}
