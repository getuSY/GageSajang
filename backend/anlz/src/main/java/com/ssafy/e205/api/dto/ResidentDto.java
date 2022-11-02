package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.StoreResidentPopulation;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResidentDto {

    int total;
    int[] gender;
    int[] age;
    int house;
    int apt;
    int nonApt;
    
    public ResidentDto(StoreResidentPopulation storeResidentPopulation){
        total = storeResidentPopulation.getTotal();
        gender = new int[2];
        gender[0] = storeResidentPopulation.getMale();
        gender[1] = storeResidentPopulation.getFemale();
        age = new int[6];
        age[0] = storeResidentPopulation.getAge10();
        age[1] = storeResidentPopulation.getAge20();
        age[2] = storeResidentPopulation.getAge30();
        age[3] = storeResidentPopulation.getAge40();
        age[4] = storeResidentPopulation.getAge50();
        age[5] = storeResidentPopulation.getAge60();
        house = storeResidentPopulation.getHouse();
        apt = storeResidentPopulation.getApt();
        nonApt = storeResidentPopulation.getNonApt();
        
    }
}
