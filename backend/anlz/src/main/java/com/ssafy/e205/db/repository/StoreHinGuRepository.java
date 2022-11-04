package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreGu;
import com.ssafy.e205.db.entity.StoreHinGu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreHinGuRepository extends MongoRepository<StoreHinGu, Integer> {

    List<StoreHinGu> findAll();
}
