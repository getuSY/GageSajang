package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreOpenCloseGu;
import com.ssafy.e205.db.entity.StoreOpenCloseGuCS;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreOpenCloseGuCSRepository extends MongoRepository<StoreOpenCloseGuCS, Integer> {

    List<StoreOpenCloseGuCS> findAllByGuName(String guName);
}
