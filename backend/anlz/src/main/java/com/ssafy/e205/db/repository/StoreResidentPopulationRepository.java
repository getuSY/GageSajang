package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreLivingPopulation;
import com.ssafy.e205.db.entity.StoreResidentPopulation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreResidentPopulationRepository extends MongoRepository<StoreResidentPopulation, Integer> {

    StoreResidentPopulation findByGuName(String guName);
    List<StoreResidentPopulation> findAll();
}
