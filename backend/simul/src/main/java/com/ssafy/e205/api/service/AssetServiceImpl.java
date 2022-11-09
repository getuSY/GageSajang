package com.ssafy.e205.api.service;

/**
 * @brief : Simul Service Impl
 * @details : 요청을 처리하기 위한 service 비즈니스 로직을 구현한 class
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

import com.ssafy.e205.api.dto.ResultDto;
import com.ssafy.e205.api.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AssetServiceImpl implements AssetService{

//    @Autowired
//    SimulDao dao;

    /** @brief : Simul List, 아마 사장 매출데이터 List 반환
     *  @date : 2022-11-02
     *  @param
     *  @return : List<SimulDto>
     *  @author : LDY, 98dlstod@naver.com
     */
    @Override
    public Optional<ResultDto> assesmentforAlready(UserDto userDto) {
        // 1. 카프카로 User에게 업데이트 메세지 보내기
        // 2. userDto 에 동 정보만 가져와서 해당하는 동의 경영진단 정보 리턴하기

        return null;
    }
}

