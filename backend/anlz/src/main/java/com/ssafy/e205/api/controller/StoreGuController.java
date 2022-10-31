package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.StoreGuLivingDto;
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
    public ResponseEntity<List<StoreGuLivingDto>> findByName(){
        List<StoreGuLivingDto> result = new ArrayList<>();
        try {
            result = service.findAllLiving();
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
