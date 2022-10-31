package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;

@Document(collection = "StoreGu")
@Getter
@Setter
@Builder
public class StoreGu {

    @Id
    String _id;

    String guName;
    int living;
    int resident;
    int store;
    int open;
    int close;
    int sales;

}
