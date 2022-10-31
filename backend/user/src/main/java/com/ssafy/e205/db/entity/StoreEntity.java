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
    private String storeName;
    @Column(name="store_address")
    private String storeAddress;
    @Column(name="store_employ_count")
    private int storeEmployCount;
    @Column(name="store_area")
    private int storeArea;
    @Column(name="store_type")
    private String storeType;
    @Column(name="store_num")
    private String storeNum;

    @Builder
    public StoreEntity(String email, String storeName, String storeAddress, int storeEmployCount, int storeArea, String storeType, String storeNum){
        this.email = email;
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storeEmployCount = storeEmployCount;
        this.storeArea = storeArea;
        this.storeType = storeType;
        this.storeNum = storeNum;
    }
}
