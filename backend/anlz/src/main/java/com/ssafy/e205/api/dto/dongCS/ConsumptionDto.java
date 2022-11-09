package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ConsumptionDto {

    long total;
    long grocery;
    long clothing;
    long house;
    long medical;
    long traffic;
    long leisure;
    long culture;
    long education;
    long pleasure;

    public ConsumptionDto(StoreAnlz storeAnlz){
        total = storeAnlz.getComsu();
        grocery = storeAnlz.getGrocery();
        clothing = storeAnlz.getClothing();
        house = storeAnlz.getHouse();
        medical = storeAnlz.getMedical();
        traffic = storeAnlz.getTraffic();
        leisure = storeAnlz.getLeisure();
        culture = storeAnlz.getCulture();
        education = storeAnlz.getEducation();
        pleasure = storeAnlz.getPleasure();
    }
}
