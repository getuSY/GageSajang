package com.ssafy.e205.db.repository;


import com.ssafy.e205.db.entity.Assesment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssetRepository extends MongoRepository<Assesment, Integer> {
    Assesment findByDongNameAndIndustryName(String dongName, String industryName);
}
