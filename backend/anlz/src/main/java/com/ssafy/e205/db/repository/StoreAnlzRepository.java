package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreAnlz;
import com.ssafy.e205.db.entity.StoreChange;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreAnlzRepository extends MongoRepository<StoreAnlz, Integer> {

    StoreAnlz findByDongCodeAndCsCode(String dongCode, String csCode);
}
