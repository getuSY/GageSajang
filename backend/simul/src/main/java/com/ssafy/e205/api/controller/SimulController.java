package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.service.SimulService;
import com.ssafy.e205.api.service.SimulServiceImpl;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * @brief : Simulation Controller
 * @details : Simulation에 대한 처리를 해주는 Controller
 * @date 2022-11-02
 * @author : LDY, 98dlstod@naver.com
 */

@RequiredArgsConstructor
@RestController
@RequestMapping("/simul")
public class SimulController {
    @Autowired
    SimulService service;

    /** @brief : Swagger responseCode 설정
     *  @date : 2022-11-02
     *  @author : LDY, 98dlstod@naver.com
     */
    @Operation(summary = "Room controller", description = "Room controller for Main page & Waitingroom Page")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })

    /** @brief : 아마 사장의 매출 예측 시뮬레이션
     *  @date : 2022-11-02
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @GetMapping(value = "/simulationForMaybe/{dongName}/{industryName}")
    public ResponseEntity<List<Integer>> list(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<Integer>>(service.salesListforMaybe(dongName, industryName), HttpStatus.OK);
    }


}
