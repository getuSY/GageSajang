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
    @Column(name="store_address_administrative")
    private String storeAddressAdministrative;
    @Column(name="store_address_court")
    private String storeAddressCourt;
    @Column(name="store_employ_count")
    private int storeEmployCount;
    @Column(name="store_area")
    private int storeArea;
    @Column(name="store_type_code")
    private String storeTypeCode;
    @Column(name = "store_type_name")
    private String storeTypeName;
    @Column(name="store_num")
    private String storeNum;

    @Builder
    public StoreEntity(String email, String storeName, String storeAddressAdministrative, String storeAddressCourt,int storeEmployCount, int storeArea, String storeTypeName, String storeTypeCode,String storeNum){
        this.email = email;
        this.storeName = storeName;
        this.storeAddressAdministrative = storeAddressAdministrative;
        this.storeAddressCourt = storeAddressCourt;
        this.storeEmployCount = storeEmployCount;
        this.storeArea = storeArea;
        this.storeTypeName = storeTypeName;
        this.storeTypeCode = storeTypeCode;
        this.storeNum = storeNum;
    }
}
