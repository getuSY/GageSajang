package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.api.service.DetailService;
import com.ssafy.e205.api.service.StoreGuService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/store")
@CrossOrigin(origins = "*")
public class DetailController {


    @Autowired
    DetailService service;

    @Operation(summary = "상세조회", description = "구이름으로 조회 시 상세 조회")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/detail/{guName}")
    public ResponseEntity<DetailDto> detail(@PathVariable String guName){
        DetailDto result = new DetailDto();
        try {
            result = service.detailFindByName(guName);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
