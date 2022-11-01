package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.api.dto.SalesMonthDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface SalesMonthRepository extends JpaRepository<SalesMonthEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    List<SalesMonthEntity> findAll();
    List<SalesMonthEntity> findByEmail(String email);
    SalesMonthEntity findByEmailAndYearAndMonth(String email, int year, int month);
    @Query(value = "select sum(cost) from sales_month where email=:email and year=:year and quarter=:quarter", nativeQuery = true)
    int findByQuarterCostSum(String email, int year, int quarter);
    int save(SalesMonthDto salesMonthDto);
    int deleteByEmail(String email);
    int deleteByEmailAndYearAndMonth(String email, int year, int month);
}
