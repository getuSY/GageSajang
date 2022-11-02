package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreOpenCloseGu;
import com.ssafy.e205.db.entity.StoreOpenCloseGuCS;
import com.ssafy.e205.db.entity.StoreResidentPopulation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreOpenCloseGuRepository extends MongoRepository<StoreOpenCloseGu, Integer> {

    StoreOpenCloseGu findByGuName(String guName);
}
