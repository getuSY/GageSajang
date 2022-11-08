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
    private String industryCode;
    private String industryName;
    private double order;
    private double total;
    private double similar;
    private double open;
    private double close;
    private double franchise;
    private double sales;
    private int clerk;
    private int area;

    public StoreDto(StoreEntity entity){
        this.id = entity.getId();
        this.email = entity.getEmail();
        this.industryCode = entity.getIndustryCode();
        this.industryName = entity.getIndustryName();
        this.order = entity.getOrder();
        this.total = entity.getTotal();
        this.similar = entity.getSimilar();
        this.open = entity.getOpen();
        this.close = entity.getClose();
        this.franchise = entity.getFranchise();
        this.sales = entity.getSales();
        this.clerk = entity.getClerk();
        this.area = entity.getArea();
    }

    public StoreEntity toEntity(StoreDto dto){
        return StoreEntity.builder()
                .email(dto.email)
                .industryCode(dto.industryCode)
                .industryName(dto.industryName)
                .area(dto.area)
                .clerk(dto.clerk)
                .close(dto.close)
                .franchise(dto.franchise)
                .open(dto.open)
                .order(dto.order)
                .sales(dto.sales)
                .similar(dto.similar)
                .total(dto.total)
                .order(dto.order)
                .build();
    }
}
