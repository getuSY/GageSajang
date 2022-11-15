package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class StoreDto {
    private Long id;
    private String email;
    private String dongName;
    private String industryName;
    private double sales;
    private int clerk;
    private int area;

    public StoreDto(StoreEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.dongName = entity.getDongName();
        this.industryName = entity.getIndustryName();
        this.sales = entity.getSales();
        this.clerk = entity.getClerk();
        this.area = entity.getArea();
    }

    public StoreEntity toEntity(StoreDto dto){
        return StoreEntity.builder()
                .email(dto.email)
                .dongName(dto.dongName)
                .industryName(dto.industryName)
                .area(dto.area)
                .clerk(dto.clerk)
                .sales(dto.sales)
                .build();
    }
}
