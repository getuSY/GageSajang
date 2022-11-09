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
    private float order; // 매출 건수 
    private float sales; // 매출
}