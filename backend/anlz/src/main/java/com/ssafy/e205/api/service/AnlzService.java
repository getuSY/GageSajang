package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.DetailDto;
import com.ssafy.e205.api.dto.dongCS.AnlzDto;

public interface AnlzService {

    AnlzDto findByDongCodeAndCsCode(String dongCode, String csCode);

}
