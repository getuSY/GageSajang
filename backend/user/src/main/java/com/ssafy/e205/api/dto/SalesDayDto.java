package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.SalesDayEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SalesDayDto {
    private Long id;
    private String email;
    private int salesDay;
    private int salesMonth;
    private int salesYear;
    private int salesCost;

    public SalesDayDto(SalesDayEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.salesCost = entity.getSalesCost();
        this.salesDay = entity.getSalesDay();
        this.salesMonth = entity.getSalesMonth();
        this.salesYear = entity.getSalesYear();
    }

    public SalesDayEntity toEntity(SalesDayDto dto){
        return SalesDayEntity.builder()
                .id(dto.id)
                .email(dto.email)
                .salesDay(dto.salesDay)
                .salesMonth(dto.salesMonth)
                .salesYear(dto.salesYear)
                .salesCost(dto.salesCost)
                .build();
    }
}
