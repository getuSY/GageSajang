package com.ssafy.e205.api.service.Sales;

import com.ssafy.e205.api.dto.SalesQuarterDto;
import com.ssafy.e205.db.entity.SalesQuarterEntity;
import com.ssafy.e205.db.repository.SalesQuarterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    SalesQuarterRepository quarterRepository;

    @Override
    public List<SalesQuarterEntity> findSalesQuarterAll() {
        return quarterRepository.findAll();
    }

    @Override
    public List<SalesQuarterEntity> findSalesQuarterUserAll(String email) {
        return quarterRepository.findByEmail(email);
    }

    @Override
    public SalesQuarterEntity findSalesQuarterEntity(String email, int year, int month) {
        return quarterRepository.findByEmailAndSalesYearAndSalesQuarter(email,year,month);
    }

    @Override
    public int findQuarterCostSum(String email, int year, int quarter) {
        return quarterRepository.findByQuarterCostSum(email, year, quarter);
    }

    @Override
    public int saveSalesQuarter(SalesQuarterDto dto) {
        return quarterRepository.save(dto);
    }

    @Override
    public int deleteSalesQuarterUserAll(String email) {
        return quarterRepository.deleteByEmail(email);
    }

    @Override
    public int deleteSalesQuarter(String email, int year, int month) {
        return quarterRepository.deleteByEmailAndSalesYearAndSalesQuarter(email, year, month);
    }
}
