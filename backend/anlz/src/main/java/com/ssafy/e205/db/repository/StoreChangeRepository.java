package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreChange;
import com.ssafy.e205.db.entity.StoreSalesVarious;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreChangeRepository extends MongoRepository<StoreChange, Integer> {

    StoreChange findByGuName(String guName);
}
