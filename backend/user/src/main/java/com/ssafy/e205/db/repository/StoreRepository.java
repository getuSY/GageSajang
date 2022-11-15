package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.StoreDto;
import com.ssafy.e205.db.entity.StoreEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface StoreRepository extends JpaRepository<StoreEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    StoreEntity findByEmail(String email);
    int save(StoreDto storeDto);
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "update store set dongName=:dongName, industryCode=:industry, sales=:sales, clerk=:clerk, area=:area where email=:email", nativeQuery = true)
    int updateStore(String email, String dongName, String industry, double sales, int clerk, int area);
//    Object save(StoreEntity entity);
    List<StoreEntity> findAll();
    int deleteByEmail(String email);
}
