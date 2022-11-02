package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreCountTop3;
import com.ssafy.e205.db.entity.StoreOpenCloseTop3;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreOpenCloseTop3Repository extends MongoRepository<StoreOpenCloseTop3, Integer> {

    StoreOpenCloseTop3 findByGuName(String guName);
}
