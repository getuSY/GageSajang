package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.api.service.StoreGuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/storeGu")
@CrossOrigin(origins = "*")
public class StoreGuController {


    @Autowired
    StoreGuService service;

    @GetMapping("/living")
    public ResponseEntity<List<StoreGuLivingDto>> findLivingAll(){
        List<StoreGuLivingDto> result = new ArrayList<>();
        try {
            result = service.findAllLiving();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/resident")
    public ResponseEntity<List<StoreGuResidentDto>> findResidentAll(){
        List<StoreGuResidentDto> result = new ArrayList<>();
        try {
            result = service.findAllResident();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/store")
    public ResponseEntity<List<StoreGuStoreDto>> findStoreAll(){
        List<StoreGuStoreDto> result = new ArrayList<>();
        try {
            result = service.findAllStore();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/open")
    public ResponseEntity<List<StoreGuOpenDto>> findOpenAll(){
        List<StoreGuOpenDto> result = new ArrayList<>();
        try {
            result = service.findAllOpen();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/close")
    public ResponseEntity<List<StoreGuCloseDto>> findCloseAll(){
        List<StoreGuCloseDto> result = new ArrayList<>();
        try {
            result = service.findAllClose();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sales")
    public ResponseEntity<List<StoreGuSalesDto>> findSalesAll(){
        List<StoreGuSalesDto> result = new ArrayList<>();
        try {
            result = service.findAllSales();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
