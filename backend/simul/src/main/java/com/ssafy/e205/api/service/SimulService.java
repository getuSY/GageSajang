package com.ssafy.e205.api.service;
/**
 * @brief : Simul Service
 * @details : Controller에서 호출, 요청을 처리하기 위한 service 로직 정의
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import java.util.List;
import java.util.Optional;

public interface SimulService {
    List<Integer> salesListforMaybe(String dongName, String industryName); // 매출데이터 리스트 출력
}
