package com.ssafy.e205.api.dto;
/**
 * @brief : Simul Dto
 * @details : DB에서 연결되는 Room에 관련된 변수들 (JPA 사용하기 위해 ENTITY 정의)
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SimulDto {
    private int year; //년도
    private int quarter; //분기
    private int value; // 결과값
    private String dongName; // 행정동명
    private String industryName; // 업종 이름
}
