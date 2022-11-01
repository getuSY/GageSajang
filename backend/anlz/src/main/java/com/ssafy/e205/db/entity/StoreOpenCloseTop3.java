package com.ssafy.e205.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StoreOpenCloseTop3")
@Getter
@Setter
@Builder
public class StoreOpenCloseTop3 {

    @Id
    String _id;

    String guName;
    String open1;
    int openPer1;
    String open2;
    int openPer2;
    String open3;
    int openPer3;
    String close1;
    int closePer1;
    String close2;
    int closePer2;
    String close3;
    int closePer3;

}
