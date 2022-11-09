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
public class UserDto {
    private String email; //이메일
    private String dong_name; //읍면동명
    private int sales; // 매출
    private int clerk; // 직원 수
    private int area; // 면적
}
