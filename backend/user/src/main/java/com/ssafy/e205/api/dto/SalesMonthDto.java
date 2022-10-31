package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SalesMonthDto {
    private Long id;
    private String email;
    private int salesMonth;
    private int salesYear;
    private int salesCost;

    public SalesMonthDto(SalesDayEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.salesCost = entity.getSalesCost();
        this.salesMonth = entity.getSalesMonth();
        this.salesYear = entity.getSalesYear();
    }

    public SalesMonthEntity toEntity(SalesMonthDto dto){
        return SalesMonthEntity.builder()
                .id(dto.id)
                .email(dto.email)
                .salesMonth(dto.salesMonth)
                .salesYear(dto.salesYear)
                .salesCost(dto.salesCost)
                .build();
    }
}
