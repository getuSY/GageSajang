package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.SalesQuarterDto;
import com.ssafy.e205.db.entity.SalesQuarterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface SalesQuarterRepository extends JpaRepository<SalesQuarterEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    List<SalesQuarterEntity> findAll();
    List<SalesQuarterEntity> findByEmail(String email);
    SalesQuarterEntity findByEmailAndSalesYearAndSalesQuarter(String email, int sales_year, int sales_quarter);
    @Query(value = "select sum(cost) from sales_month where email=:email and sales_year=:sales_year and sales_quarter=:sales_quarter", nativeQuery = true)
    int findByQuarterCostSum(String email, int sales_year, int sales_quarter);
    int save(SalesQuarterDto salesQuarterDto);
    int deleteByEmail(String email);
    int deleteByEmailAndSalesYearAndSalesQuarter(String email, int sales_year, int sales_quarter);
}
