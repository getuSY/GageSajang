package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.SalesDayDto;
import com.ssafy.e205.api.dto.SalesMonthDto;
import com.ssafy.e205.api.service.Sales.SalesService;
import com.ssafy.e205.api.service.Sales.SalesServiceImpl;
import com.ssafy.e205.db.entity.SalesDayEntity;
import com.ssafy.e205.db.entity.SalesMonthEntity;
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
    @GetMapping("/getSalesDayAll")
    public ResponseEntity<List<SalesDayEntity>> getSalesDayAll(){
        return new ResponseEntity<List<SalesDayEntity>>(service.findSalesDayEntityAll(), HttpStatus.OK);
    }
    @GetMapping("/getSalesDayUserAll/{email}")
    public ResponseEntity<List<SalesDayEntity>> getSalesDayUserAll(@PathVariable String email){
        return new ResponseEntity<List<SalesDayEntity>>(service.findSalesDayEntityUserAll(email), HttpStatus.OK);
    }
    @GetMapping("/getSalesDay/{email}/{year}/{month}/{day}")
    public ResponseEntity<SalesDayEntity> getSalesDayEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month, @PathVariable int day){
        return new ResponseEntity<SalesDayEntity>(service.findSalesDayEntity(email, year, month, day), HttpStatus.OK);
    }
    @PostMapping("/setSalesDay")
    public ResponseEntity<Integer> setSalesDay(@RequestBody SalesDayDto dto){
        return new ResponseEntity<Integer>(service.saveSalesDayEntity(dto), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesDayUserAll/{email}")
    public ResponseEntity<Integer> deleteSalesDayUserAll(@PathVariable String email){
        return new ResponseEntity<Integer>(service.deleteSalesDayUserAll(email), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesDay/{email}/{year}/{month}/{day}")
    public ResponseEntity<Integer> deleteSalesDayEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month, @PathVariable int day){
        return new ResponseEntity<Integer>(service.deleteSalesDayEntity(email, year, month, day),HttpStatus.OK);
    }

    @GetMapping("/getSalesDayAll")
    public ResponseEntity<List<SalesMonthEntity>> getSalesMonthAll(){
        return new ResponseEntity<List<SalesMonthEntity>>(service.findSalesMonthAll(), HttpStatus.OK);
    }
    @GetMapping("/getSalesDayUserAll/{email}")
    public ResponseEntity<List<SalesMonthEntity>> getSalesMonthUserAll(@PathVariable String email){
        return new ResponseEntity<List<SalesMonthEntity>>(service.findSalesMonthUserAll(email), HttpStatus.OK);
    }
    @GetMapping("/getSalesDay/{email}/{year}/{month}")
    public ResponseEntity<SalesMonthEntity> getSalesMonthEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month){
        return new ResponseEntity<SalesMonthEntity>(service.findSalesMonthEntity(email, year, month), HttpStatus.OK);
    }
    @PostMapping("/setSalesDay")
    public ResponseEntity<Integer> setSalesMonth(@RequestBody SalesMonthDto dto){
        return new ResponseEntity<Integer>(service.saveSalesMonth(dto), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesDayUserAll/{email}")
    public ResponseEntity<Integer> deleteSalesMonthUserAll(@PathVariable String email){
        return new ResponseEntity<Integer>(service.deleteSalesMonthUserAll(email), HttpStatus.OK);
    }
    @DeleteMapping("/deleteSalesDay/{email}/{year}/{month}")
    public ResponseEntity<Integer> deleteSalesMonthEntity(@PathVariable String email, @PathVariable int year, @PathVariable int month){
        return new ResponseEntity<Integer>(service.deleteSalesMonth(email, year, month),HttpStatus.OK);
    }
}
