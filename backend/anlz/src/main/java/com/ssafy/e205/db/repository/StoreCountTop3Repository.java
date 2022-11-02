package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreChange;
import com.ssafy.e205.db.entity.StoreCountTop3;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreCountTop3Repository extends MongoRepository<StoreCountTop3, Integer> {

    StoreCountTop3 findByGuName(String guName);
}
