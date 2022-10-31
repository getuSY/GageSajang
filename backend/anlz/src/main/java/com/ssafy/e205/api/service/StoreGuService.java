package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.StoreGuLivingDto;

import java.util.List;

public interface StoreGuService {

    List<StoreGuLivingDto> findAllLiving();
}
