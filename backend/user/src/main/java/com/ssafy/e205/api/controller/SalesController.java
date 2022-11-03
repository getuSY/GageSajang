package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.SalesQuarterDto;
import com.ssafy.e205.api.service.Sales.SalesService;
import com.ssafy.e205.api.service.Sales.SalesServiceImpl;
import com.ssafy.e205.db.entity.SalesQuarterEntity;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SalesController {

    @Autowired
    SalesService service = new SalesServiceImpl();

    @Operation(summary = "Sales Controller", description = "Day & Month Sales Info CRUD")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })


    @GetMapping("/getSalesQuarterAll")
    public ResponseEntity<List<SalesQuarterEntity>> getSalesMonthAll(){
        return new ResponseEntity<List<SalesQuarterEntity>>(service.findSalesQuarterAll(), HttpStatus.OK);
    }
    @GetMapping("/getSalesQuarterUserAll/{email}")
    public ResponseEntity<List<SalesQuarterEntity>> getSalesMonthUserAll(@PathVariable String email){
        return new ResponseEntity<List<SalesQuarterEntity>>(service.findSalesQuarterUserAll(email), HttpStatus.OK);
    }
    @GetMapping("/getSalesQuarter/{email}/{year}/{quarter}")
    public ResponseEntity<SalesQuarterEntity> getSalesMonthEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month){
        return new ResponseEntity<SalesQuarterEntity>(service.findSalesQuarterEntity(email, year, month), HttpStatus.OK);
    }
    @PostMapping("/setSalesQuarter")
    public ResponseEntity<Integer> setSalesMonth(@RequestBody SalesQuarterDto dto){
        return new ResponseEntity<Integer>(service.saveSalesQuarter(dto), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesQuarterUserAll/{email}")
    public ResponseEntity<Integer> deleteSalesMonthUserAll(@PathVariable String email){
        return new ResponseEntity<Integer>(service.deleteSalesQuarterUserAll(email), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesQuarter/{email}/{year}/{quarter}")
    public ResponseEntity<Integer> deleteSalesMonthEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month){
        return new ResponseEntity<Integer>(service.deleteSalesQuarter(email, year, month),HttpStatus.OK);
    }
}
