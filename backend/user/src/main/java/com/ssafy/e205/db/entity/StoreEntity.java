package com.ssafy.e205.db.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Table(
        name = "store"
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class StoreEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;
    @Column(name = "dong_name")
    private String dongName;
    @Column(name="industry_code")
    private String industryCode;
    @Column(name="industry_name")
    private String industryName;
    @Column(name="order")
    private double order;
    @Column(name="total")
    private double total;
    @Column(name="similar")
    private double similar;
    @Column(name="open")
    private double open;
    @Column(name = "close")
    private double close;
    @Column(name="franchise")
    private double franchise;
    @Column(name="sales")
    private double sales;
    @Column(name="clerk")
    private int clerk;
    @Column(name="area")
    private int area;

    @Builder
    public StoreEntity(String email, String dongName, String industryCode, String industryName, double order, double total, double similar, double open, double close, double franchise, double sales, int clerk, int area){
        this.email = email;
        this.dongName = dongName;
        this.industryCode = industryCode;
        this.industryName = industryName;
        this.order = order;
        this.total = total;
        this.similar = similar;
        this.open = open;
        this.close = close;
        this.franchise = franchise;
        this.sales = sales;
        this.clerk = clerk;
        this.area = area;
    }
}
