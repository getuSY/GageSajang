package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.Top10Dto;
import com.ssafy.e205.api.dto.dongCS.AnlzDto;
import com.ssafy.e205.api.service.AnlzService;
import com.ssafy.e205.api.service.Top10Service;
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
public class Top10Controller {

    @Autowired
    Top10Service service;

    @Operation(summary = "TOP10", description = "TOP10 5가지 한번에 조회")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/anlz/store/top10")
    public ResponseEntity<Top10Dto> findFirst(){
        Top10Dto result = new Top10Dto();
        try {
            result = service.findFirst();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
