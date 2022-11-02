package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.api.service.DetailService;
import com.ssafy.e205.api.service.StoreGuService;
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
