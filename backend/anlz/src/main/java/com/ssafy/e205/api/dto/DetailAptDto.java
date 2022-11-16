package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreDetailApt;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DetailAptDto {
    private String guName;
    private int house;
    private int apt;
    private int nonApt;

    public DetailAptDto(StoreDetailApt detailApt){
        this.guName = detailApt.getGuName();
        this.house = detailApt.getHouse();
        this.apt = detailApt.getApt();
        this.nonApt = detailApt.getNonApt();
    }
}

