package com.ssafy.e205.api.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DetailDto {

    LivingDto living;
    ResidentDto resident;
    StoreDto store;
    OpenDto open;
    CloseDto close;
    String change;
    SalesDto sales;

}
