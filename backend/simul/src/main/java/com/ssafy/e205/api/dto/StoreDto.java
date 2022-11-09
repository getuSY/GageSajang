package com.ssafy.e205.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StoreDto {
    private float total; // 평균 점포수
    private int clerk; // 평균 직원수
    private int area; // 평균 면적
    private float similar; // 평균 유사업종 수
    private float franchise; // 평균 프랜차이즈 수
}