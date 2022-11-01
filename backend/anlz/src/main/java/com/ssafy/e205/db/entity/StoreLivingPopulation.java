package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreLivingPopulation")
@Getter
@Setter
@Builder
public class StoreLivingPopulation {

    @Id
    String _id;

    String guName;
    String quCode;
    int total;
    int male;
    int female;
    int age10;
    int age20;
    int age30;
    int age40;
    int age50;
    int age60;
    int time1;
    int time2;
    int time3;
    int time4;
    int time5;
    int time6;
    int mon;
    int tue;
    int wed;
    int thu;
    int fri;
    int sat;
    int sun;

}
