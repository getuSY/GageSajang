package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreTop10;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreTop10Repository extends MongoRepository<StoreTop10, Integer> {

    List<StoreTop10> findAll();

}
