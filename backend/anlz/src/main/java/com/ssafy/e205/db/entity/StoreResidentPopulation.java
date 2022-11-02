package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreResidentPopulation")
@Getter
@Setter
@Builder
public class StoreResidentPopulation {

    @Id
    String _id;

    String guName;
    int total;
    int male;
    int female;
    int age10;
    int age20;
    int age30;
    int age40;
    int age50;
    int age60;
    int house;
    int apt;
    int nonApt;
}
