package com.ssafy.e205.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ResultDto {
    StoreDto store;
    SalesDto sales;
    StatusDto status;
}