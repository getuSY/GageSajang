package com.ssafy.e205.api.service.Sales;

import com.ssafy.e205.api.dto.SalesQuarterDto;
import com.ssafy.e205.db.entity.SalesQuarterEntity;

import java.util.List;

public interface SalesService {
    List<SalesQuarterEntity> findSalesQuarterAll();
    List<SalesQuarterEntity> findSalesQuarterUserAll(String email);
    SalesQuarterEntity findSalesQuarterEntity(String email, int year, int quarter);
    int findQuarterCostSum(String email, int year, int quarter);
    int saveSalesQuarter(SalesQuarterDto dto);
    int deleteSalesQuarterUserAll(String email);
    int deleteSalesQuarter(String email, int year, int quarter);
}
