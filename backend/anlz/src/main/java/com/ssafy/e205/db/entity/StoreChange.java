package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreChange")
@Getter
@Setter
@Builder
public class StoreChange {

    @Id
    String _id;

    String guName;
    String change;

}
