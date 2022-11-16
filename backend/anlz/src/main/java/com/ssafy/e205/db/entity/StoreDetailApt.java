package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreDetailApt")
@Getter
@Setter
@Builder
public class StoreDetailApt {

    @Id
    String _id;

    String guName;
    int apt;
    int nonApt;
    int house;

}
