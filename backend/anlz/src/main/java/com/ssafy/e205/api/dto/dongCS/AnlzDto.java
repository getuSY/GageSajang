package com.ssafy.e205.api.dto.dongCS;

import com.ssafy.e205.db.entity.StoreAnlz;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AnlzDto {

    StoreDto store;
    SalesDto sales;
    LivingDto living;
    ResidentDto resident;
    HinterlandDto hinterland;
    OpenDto open;
    CloseDto close;
    long income;
    ConsumptionDto consumption;
    long risk;
    double riskRate;

    public AnlzDto(StoreAnlz storeAnlz){
        store = new StoreDto(storeAnlz);
        sales = new SalesDto(storeAnlz);
        living = new LivingDto(storeAnlz);
        resident = new ResidentDto(storeAnlz);
        hinterland = new HinterlandDto(storeAnlz);
        open = new OpenDto(storeAnlz);
        close = new CloseDto(storeAnlz);
        income = storeAnlz.getIncome();
        consumption = new ConsumptionDto(storeAnlz);
        risk = storeAnlz.getRiskIndices();
        riskRate = storeAnlz.getRiskRate();
    }
}
