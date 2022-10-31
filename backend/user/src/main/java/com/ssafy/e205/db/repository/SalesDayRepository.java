package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.db.entity.SalesDayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface SalesDayRepository extends JpaRepository<SalesDayEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    List<SalesDayEntity> findAll();
    List<SalesDayEntity> findByEmail(String email);
    SalesDayEntity findByEmailAndYearAndMonthAndDay(String email, int year, int month, int day);
    int save(SalesDayDto salesDayDto);
    int deleteByEmail(String email);
    int deleteByEmailAndYearAndMonthAndDay(String email, int year, int month, int day);
}
