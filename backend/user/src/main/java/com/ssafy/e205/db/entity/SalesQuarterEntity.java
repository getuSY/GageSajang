package com.ssafy.e205.db.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Table(
        name = "sales_month"
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class SalesQuarterEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;
    @Column(name = "sales_quarter")
    private int salesQuarter;
    @Column(name="sales_year")
    private int salesYear;
    @Column(name="sales_cost")
    private int salesCost;

    @Builder
    public SalesQuarterEntity(Long id, String email, int salesCost, int salesQuarter, int salesYear){
        this.id = id;
        this.email = email;
        this.salesCost = salesCost;
        this.salesYear = salesYear;
        this.salesQuarter = salesQuarter;
    }
}
