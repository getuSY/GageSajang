package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.db.entity.*;
import com.ssafy.e205.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetailServiceImpl implements DetailService{

    @Autowired
    StoreLivingPopulationRepository livingPopulation;
    @Autowired
    StoreResidentPopulationRepository residentPopulation;
    @Autowired
    StoreOpenCloseGuRepository openCloseGu;
    @Autowired
    StoreOpenCloseGuCSRepository openCloseGuCS;
    @Autowired
    StoreOpenCloseGuDivRepository openCloseGuDiv;
    @Autowired
    StoreChangeRepository change;
    @Autowired
    StoreSalesMonthRepository salesMonth;
    @Autowired
    StoreSalesVariousRepository salesVarious;
    @Autowired
    StoreCountTop3Repository countTop3;
    @Autowired
    StoreOpenCloseTop3Repository openCloseTop3;
    @Autowired
    StoreDetailAptRepository aptDetail;

    @Cacheable(value = "detail",key="#guName")
    @Override
    public DetailDto detailFindByName(String guName) {
        System.out.println(guName);
        LivingDto livingDto = new LivingDto(livingPopulation.findByGuName(guName));
        ResidentDto residentDto = new ResidentDto(residentPopulation.findByGuName(guName));

        StoreOpenCloseGu storeOpenCloseGu = openCloseGu.findByGuName(guName);
        List<StoreOpenCloseGuCS> storeOpenCloseGuCS = openCloseGuCS.findAllByGuName(guName);
        List<StoreOpenCloseGuDiv> storeOpenCloseGuDiv = openCloseGuDiv.findAllByGuName(guName);

        StoreOpenCloseTop3 storeOpenCloseTop3 = openCloseTop3.findByGuName(guName);
        StoreCountTop3 storeCountTop3 = countTop3.findByGuName(guName);

        StoreDto storeDto = new StoreDto(storeOpenCloseGu, storeOpenCloseGuCS, storeOpenCloseGuDiv, storeCountTop3);


        OpenDto openDto = new OpenDto(storeOpenCloseGu, storeOpenCloseGuCS, storeOpenCloseTop3);
        CloseDto closeDto = new CloseDto(storeOpenCloseGu, storeOpenCloseGuCS, storeOpenCloseTop3);

        String changeGu = change.findByGuName(guName).getChange();

        List<StoreSalesMonth> storeSalesMonth = salesMonth.findAllByGuName(guName);
        StoreSalesVarious storeSalesVarious = salesVarious.findByGuName(guName);

        SalesDto salesDto = new SalesDto(storeSalesMonth, storeSalesVarious);

        DetailDto detailDto = new DetailDto(livingDto, residentDto, storeDto, openDto, closeDto, changeGu, salesDto);

        return detailDto;
    }

    @Override
    public DetailAptDto detailAptFindByName(String guName) {
        System.out.println(guName);
        StoreDetailApt entity = aptDetail.findByGuName(guName);
        return new DetailAptDto(entity);
    }
}
