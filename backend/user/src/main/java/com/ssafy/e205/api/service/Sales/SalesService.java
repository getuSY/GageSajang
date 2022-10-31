package com.ssafy.e205.api.service.Sales;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.api.dto.SalesMonthDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;

import java.util.List;

public interface SalesService {
    List<SalesMonthEntity> findSalesMonthAll();
    List<SalesMonthEntity> findSalesMonthUserAll(String email);
    SalesMonthEntity findSalesMonthEntity(String email, int year, int month);
    int saveSalesMonth(SalesMonthDto dto);
    int deleteSalesMonthUserAll(String email);
    int deleteSalesMonth(String email, int year, int month);

    List<SalesDayEntity> findSalesDayEntityAll();
    List<SalesDayEntity> findSalesDayEntityUserAll(String email);
    SalesDayEntity findSalesDayEntity(String email, int year, int month, int day);
    int saveSalesDayEntity(SalesDayDto dto);
    int deleteSalesDayUserAll(String email);
    int deleteSalesDayEntity(String email, int year, int month, int day);
}
