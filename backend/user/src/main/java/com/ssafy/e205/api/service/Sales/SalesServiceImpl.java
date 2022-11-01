package com.ssafy.e205.api.service.Sales;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.api.dto.SalesMonthDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;
import com.ssafy.e205.db.repository.SalesDayRepository;
import com.ssafy.e205.db.repository.SalesMonthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    SalesDayRepository dayRepository;

    @Autowired
    SalesMonthRepository monthRepository;

    @Override
    public List<SalesMonthEntity> findSalesMonthAll() {
        return monthRepository.findAll();
    }

    @Override
    public List<SalesMonthEntity> findSalesMonthUserAll(String email) {
        return monthRepository.findByEmail(email);
    }

    @Override
    public SalesMonthEntity findSalesMonthEntity(String email, int year, int month) {
        return monthRepository.findByEmailAndYearAndMonth(email,year,month);
    }

    @Override
    public int findQuarterCostSum(String email, int year, int quarter) {
        return monthRepository.findByQuarterCostSum(email, year, quarter);
    }

    @Override
    public int saveSalesMonth(SalesMonthDto dto) {
        return monthRepository.save(dto);
    }

    @Override
    public int deleteSalesMonthUserAll(String email) {
        return monthRepository.deleteByEmail(email);
    }

    @Override
    public int deleteSalesMonth(String email, int year, int month) {
        return monthRepository.deleteByEmailAndYearAndMonth(email, year, month);
    }

    @Override
    public List<SalesDayEntity> findSalesDayEntityAll() {
        return dayRepository.findAll();
    }

    @Override
    public List<SalesDayEntity> findSalesDayEntityUserAll(String email) {
        return dayRepository.findByEmail(email);
    }

    @Override
    public SalesDayEntity findSalesDayEntity(String email, int year, int month, int day) {
        return dayRepository.findByEmailAndYearAndMonthAndDay(email, year, month, day);
    }

    @Override
    public int saveSalesDayEntity(SalesDayDto dto) {
        return dayRepository.save(dto);
    }

    @Override
    public int deleteSalesDayUserAll(String email) {
        return dayRepository.deleteByEmail(email);
    }

    @Override
    public int deleteSalesDayEntity(String email, int year, int month, int day) {
        return dayRepository.deleteByEmailAndYearAndMonthAndDay(email, year, month, day);
    }
}
