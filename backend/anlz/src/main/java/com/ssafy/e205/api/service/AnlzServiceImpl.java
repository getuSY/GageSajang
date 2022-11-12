package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.dongCS.AnlzDto;
import com.ssafy.e205.db.entity.StoreAnlz;
import com.ssafy.e205.db.repository.StoreAnlzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class AnlzServiceImpl implements AnlzService{

    @Autowired
    StoreAnlzRepository repository;

    @Override
    //@Cacheable(value = "anlz",key="#dongCode+#csCode")
    public AnlzDto findByDongCodeAndCsCode(String dongCode, String csCode) {
        AnlzDto result;
        StoreAnlz storeAnlz = repository.findByDongCodeAndCsCode(dongCode, csCode);
        result = new AnlzDto(storeAnlz);
        return result;
    }
}
