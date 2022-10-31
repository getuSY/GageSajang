package com.ssafy.e205.db.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Table(
        name = "sales_day"
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class SalesDayEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;
    @Column(name="sales_day")
    private int salesDay;
    @Column(name="sales_month")
    private int salesMonth;
    @Column(name="sales_year")
    private int salesYear;
    @Column(name="sales_cost")
    private int salesCost;

    @Builder
    public SalesDayEntity(Long id, String email, int salesCost, int salesMonth, int salesDay, int salesYear){
        this.id = id;
        this.email = email;
        this.salesCost = salesCost;
        this.salesYear = salesYear;
        this.salesDay = salesDay;
        this.salesMonth = salesMonth;
    }
}
