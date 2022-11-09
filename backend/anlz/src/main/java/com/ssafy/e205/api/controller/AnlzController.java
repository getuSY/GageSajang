package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.DetailDto;
import com.ssafy.e205.api.dto.dongCS.AnlzDto;
import com.ssafy.e205.api.service.AnlzService;
import com.ssafy.e205.api.service.DetailService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AnlzController {

    @Autowired
    AnlzService service;

    @Operation(summary = "아마사장 분석 조회", description = "행정동코드(8자리), 업종코드(8자리)로 조회")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/anlz/{dongCode}/{csCode}")
    public ResponseEntity<AnlzDto> findByDongCodeAndCsCode(@PathVariable String dongCode, @PathVariable String csCode){
        AnlzDto result = new AnlzDto();
        try {
            result = service.findByDongCodeAndCsCode(dongCode, csCode);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
