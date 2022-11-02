package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreOpenCloseGuDiv;
import com.ssafy.e205.db.entity.StoreSalesMonth;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreSalesMonthRepository extends MongoRepository<StoreSalesMonth, Integer> {

    List<StoreSalesMonth> findAllByGuName(String guName);
}
