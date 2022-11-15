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
    @Column(name="industryName")
    private String industryName;
    @Column(name="sales")
    private double sales;
    @Column(name="clerk")
    private int clerk;
    @Column(name="area")
    private int area;

    @Builder
    public StoreEntity(String email, String dongName, String industryName, double sales, int clerk, int area){
        this.email = email;
        this.dongName = dongName;
        this.industryName = industryName;
        this.sales = sales;
        this.clerk = clerk;
        this.area = area;
    }
}
