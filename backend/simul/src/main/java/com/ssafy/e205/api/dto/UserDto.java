package com.ssafy.e205.api.dto;

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
    private String dongName; //읍면동명
    private String industryName; //업종명
    private int sales; // 매출
    private int clerk; // 직원 수
    private int area; // 면적
}
