package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreGu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreGuRepository extends MongoRepository<StoreGu, Integer> {

    List<StoreGu> findAll();
}
