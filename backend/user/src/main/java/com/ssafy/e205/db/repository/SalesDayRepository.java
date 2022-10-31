package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalesDayRepository extends JpaRepository<SalesDayEntity, Integer> {
    List<SalesDayEntity> findAll();
    List<SalesDayEntity> findByEmail(String email);
    SalesDayEntity findByEmailAndYearAndMonthAndDay(String email, int year, int month, int day);
    int save(SalesDayDto salesDayDto);
    int deleteByEmail(String email);
    int deleteByEmailAndYearAndMonthAndDay(String email, int year, int month, int day);
}
