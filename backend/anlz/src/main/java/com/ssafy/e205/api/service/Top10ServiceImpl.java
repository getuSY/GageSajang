package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.Top10Dto;
import com.ssafy.e205.db.repository.StoreTop10Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Top10ServiceImpl implements Top10Service{

    @Autowired
    StoreTop10Repository repository;

    @Override
    public Top10Dto findFirst() {
        return new Top10Dto(repository.findAll().get(0));
    }
}
