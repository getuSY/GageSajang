package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreOpenCloseGuCS;
import com.ssafy.e205.db.entity.StoreOpenCloseGuDiv;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreOpenCloseGuDivRepository extends MongoRepository<StoreOpenCloseGuDiv, Integer> {

    List<StoreOpenCloseGuDiv> findAllByGuName(String guName);
}
