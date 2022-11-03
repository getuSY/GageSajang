package com.ssafy.e205.api.service;
/**
 * @brief : Simul Service
 * @details : Controller에서 호출, 요청을 처리하기 위한 service 로직 정의
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import com.ssafy.e205.api.dto.SimulDto;
import java.util.List;
import java.util.Optional;

public interface SimulService {
    List<SimulDto> salesListforMaybe(String dongName, String industryName); // 아마사장 매출데이터 리스트 출력
    List<SimulDto> salesListforAlready(SimulDto dto); // 이미 사장 매출데이터 리스트 출력

    List<SimulDto> salesListforAlready_Post(SimulDto dto); // 이미 사장 매출데이터 리스트 출력
}
