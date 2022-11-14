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
    @Column(name = "dongName")
    private String dongName;
    @Column(name="industryCode")
    private String industryCode;
    @Column(name="sales")
    private double sales;
    @Column(name="clerk")
    private int clerk;
    @Column(name="area")
    private int area;

    @Builder
    public StoreEntity(String email, String dongName, String industryCode, double sales, int clerk, int area){
        this.email = email;
        this.dongName = dongName;
        this.industryCode = industryCode;
        this.sales = sales;
        this.clerk = clerk;
        this.area = area;
    }
}
