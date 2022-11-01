package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreCountTop3")
@Getter
@Setter
@Builder
public class StoreCountTop3 {

    @Id
    String _id;

    String guName;
    String CS11;
    String CS12;
    String CS13;
    String CS21;
    String CS22;
    String CS23;
    String CS31;
    String CS32;
    String CS33;



}
