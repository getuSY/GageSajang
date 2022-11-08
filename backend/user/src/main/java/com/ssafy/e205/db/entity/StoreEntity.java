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
    @Column(name="store_name")
    private String industryCode;
    @Column(name="store_address_administrative")
    private String industryName;
    @Column(name="store_address_court")
    private double order;
    @Column(name="store_employ_count")
    private double total;
    @Column(name="store_area")
    private double similar;
    @Column(name="store_type_code")
    private double open;
    @Column(name = "store_type_name")
    private double close;
    @Column(name="store_num")
    private double franchise;
    @Column(name="store_num")
    private double sales;
    @Column(name="store_num")
    private int clerk;
    @Column(name="store_num")
    private int area;

    @Builder
    public StoreEntity(String email, String industryCode, String industryName, double order, double total, double similar, double open, double close, double franchise, double sales, int clerk, int area){
        this.email = email;
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
