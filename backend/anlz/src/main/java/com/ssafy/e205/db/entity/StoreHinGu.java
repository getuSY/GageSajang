package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreHinGu")
@Getter
@Setter
@Builder
public class StoreHinGu {

    @Id
    String _id;

    String guName;
    int living;
    int resident;
    int store;
    int open;
    int close;
    long sales;

}
