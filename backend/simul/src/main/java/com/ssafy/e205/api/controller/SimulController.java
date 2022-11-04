package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.SimulDto;
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
    @Operation(summary = "Simulation controller", description = "Simulation controller 이미사장, 아마사장을 위한 시뮬레이션 컨트롤러")
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
    @GetMapping(value = "/sales/maybe/{dongName}/{industryName}")
    public ResponseEntity<List<SimulDto>> salesListforMaybe(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<SimulDto>>(service.salesListforMaybe(dongName, industryName), HttpStatus.OK);
    }

    /** @brief : 아마 사장의 생활인구 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @GetMapping(value = "/life/maybe/{dongName}/{industryName}")
    public ResponseEntity<List<SimulDto>> lifeListforMaybe(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<SimulDto>>(service.lifeListforMaybe(dongName, industryName), HttpStatus.OK);
    }

    /** @brief : 아마 사장의 거주인구 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @GetMapping(value = "/resident/maybe/{dongName}/{industryName}")
    public ResponseEntity<List<SimulDto>> residentListforMaybe(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<SimulDto>>(service.residentListforMaybe(dongName, industryName), HttpStatus.OK);
    }

    /** @brief : 아마 사장의 직장인구 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @GetMapping(value = "/job/maybe/{dongName}/{industryName}")
    public ResponseEntity<List<SimulDto>> jobListforMaybe(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<SimulDto>>(service.jobListforMaybe(dongName, industryName), HttpStatus.OK);
    }

    /** @brief : 아마 사장의 매출 건수 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @GetMapping(value = "/count/maybe/{dongName}/{industryName}")
    public ResponseEntity<List<SimulDto>> countListforMaybe(@Parameter(description = "행정동 명", required = true, example = "개포2동") @PathVariable String dongName, @Parameter(description = "한식음식점", required = true, example = "고고") @PathVariable String industryName){
        return new ResponseEntity<List<SimulDto>>(service.countListforMaybe(dongName, industryName), HttpStatus.OK);
    }

    /** @brief : 이미 사장의 매출 예측 시뮬레이션
     *  @date : 2022-11-02
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/sales/already")
    public ResponseEntity<List<SimulDto>> salesListforAlready(@Parameter(description = "object (년도, 분기, 행정동명, 분기 매출금액)", required = true, example = "Simul dto")@RequestBody  SimulDto dto) {
        System.out.println(dto);
        return new ResponseEntity<List<SimulDto>>(service.salesListforAlready(dto), HttpStatus.OK);
    }

    /** @brief : 이미 사장의 생활 인구 예측 시뮬레이션
     *  @date : 2022-11-02
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/life/already")
    public ResponseEntity<List<SimulDto>> lifeListforAlready(@Parameter(description = "object (년도, 분기, 행정동명, 분기 매출금액)", required = true, example = "Simul dto")@RequestBody  SimulDto dto) {
        System.out.println(dto);
        return new ResponseEntity<List<SimulDto>>(service.lifeListforAlready(dto), HttpStatus.OK);
    }

    /** @brief : 이미 사장의  거주 인구 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/resident/already")
    public ResponseEntity<List<SimulDto>> residentListforAlready(@Parameter(description = "object (년도, 분기, 행정동명, 분기 매출금액)", required = true, example = "Simul dto")@RequestBody  SimulDto dto) {
        System.out.println(dto);
        return new ResponseEntity<List<SimulDto>>(service.residentListforAlready(dto), HttpStatus.OK);
    }

    /** @brief : 이미 사장의  직장 인구 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/job/already")
    public ResponseEntity<List<SimulDto>> jobListforAlready(@Parameter(description = "object (년도, 분기, 행정동명, 분기 매출금액)", required = true, example = "Simul dto")@RequestBody  SimulDto dto) {
        System.out.println(dto);
        return new ResponseEntity<List<SimulDto>>(service.jobListforAlready(dto), HttpStatus.OK);
    }

    /** @brief : 이미 사장의  매출 거래 건수 예측 시뮬레이션
     *  @date : 2022-11-04
     *  @param  : dongName, industryName
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/count/already")
    public ResponseEntity<List<SimulDto>> countListforAlready(@Parameter(description = "object (년도, 분기, 행정동명, 분기 매출금액)", required = true, example = "Simul dto")@RequestBody  SimulDto dto) {
        System.out.println(dto);
        return new ResponseEntity<List<SimulDto>>(service.countListforAlready(dto), HttpStatus.OK);
    }


}
