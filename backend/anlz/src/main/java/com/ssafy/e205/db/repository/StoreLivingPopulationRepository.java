package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreLivingPopulation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreLivingPopulationRepository extends MongoRepository<StoreLivingPopulation, Integer> {

    StoreLivingPopulation findByGuName(String guName);
}
