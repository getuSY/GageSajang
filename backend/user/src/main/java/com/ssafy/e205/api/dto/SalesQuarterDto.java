package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.SalesQuarterEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SalesQuarterDto {
    private Long id;
    private String email;
    private int salesQuarter;
    private int salesYear;
    private int salesCost;

    public SalesQuarterDto(SalesQuarterEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.salesCost = entity.getSalesCost();
        this.salesQuarter = entity.getSalesQuarter();
        this.salesYear = entity.getSalesYear();
    }

    public SalesQuarterEntity toEntity(SalesQuarterDto dto){
        return SalesQuarterEntity.builder()
                .id(dto.id)
                .email(dto.email)
                .salesQuarter(dto.salesQuarter)
                .salesYear(dto.salesYear)
                .salesCost(dto.salesCost)
                .build();
    }
}
