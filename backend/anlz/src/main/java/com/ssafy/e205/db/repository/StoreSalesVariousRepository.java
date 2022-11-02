package com.ssafy.e205.db.repository;

import com.ssafy.e205.db.entity.StoreSalesMonth;
import com.ssafy.e205.db.entity.StoreSalesVarious;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StoreSalesVariousRepository extends MongoRepository<StoreSalesVarious, Integer> {

    StoreSalesVarious findByGuName(String guName);
}
