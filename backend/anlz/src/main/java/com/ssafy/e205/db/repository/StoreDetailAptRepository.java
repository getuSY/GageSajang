package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreDetailApt;
import com.ssafy.e205.db.entity.StoreResidentPopulation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreDetailAptRepository extends MongoRepository<StoreDetailApt, Integer> {

    StoreDetailApt findByGuName(String guName);
    List<StoreDetailApt> findAll();
}
