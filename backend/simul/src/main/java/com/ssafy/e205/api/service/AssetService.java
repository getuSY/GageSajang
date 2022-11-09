package com.ssafy.e205.api.service;
/**
 * @brief : Simul Service
 * @details : Controller에서 호출, 요청을 처리하기 위한 service 로직 정의
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import com.ssafy.e205.api.dto.ResultDto;
import com.ssafy.e205.api.dto.UserDto;

import java.util.Optional;

public interface AssetService {
    Optional<ResultDto> assesmentforAlready(UserDto userDto);
}
