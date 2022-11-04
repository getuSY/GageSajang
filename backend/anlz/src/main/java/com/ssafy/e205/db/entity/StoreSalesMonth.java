package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreSalesMonth")
@Getter
@Setter
@Builder
public class StoreSalesMonth {

    @Id
    String _id;

    String guName;
    String cs;
    int sales;

}
