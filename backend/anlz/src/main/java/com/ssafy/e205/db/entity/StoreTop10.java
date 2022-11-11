package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreTop10")
@Getter
@Setter
@Builder
public class StoreTop10 {

    @Id
    String _id;

    String[] commercial;
    String[] sectors;
    String[] close;
    String[] salesDong;
    String[] salesCS;
}
