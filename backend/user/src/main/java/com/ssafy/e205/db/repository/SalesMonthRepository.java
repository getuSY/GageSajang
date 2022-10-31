package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.api.dto.SalesMonthDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalesMonthRepository extends JpaRepository<SalesMonthEntity, Integer> {
    List<SalesMonthEntity> findAll();
    List<SalesMonthEntity> findByEmail(String email);
    SalesMonthEntity findByEmailAndYearAndMonth(String email, int year, int month);
    int save(SalesMonthDto salesMonthDto);
    int deleteByEmail(String email);
    int deleteByEmailAndYearAndMonth(String email, int year, int month);
}
