package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;

import java.util.List;

public interface StoreGuService {

    List<StoreGuLivingDto> findAllLiving();

    List<StoreGuResidentDto> findAllResident();
    List<StoreGuStoreDto> findAllStore();
    List<StoreGuOpenDto> findAllOpen();
    List<StoreGuCloseDto> findAllClose();
    List<StoreGuSalesDto> findAllSales();
}
