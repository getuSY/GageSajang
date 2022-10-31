package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.FavoriteDto;
import com.ssafy.e205.api.dto.StoreDto;
import com.ssafy.e205.api.service.Favorite.FavoriteService;
import com.ssafy.e205.api.service.Favorite.FavoriteServiceImpl;
import com.ssafy.e205.api.service.Store.StoreService;
import com.ssafy.e205.api.service.Store.StoreServiceImpl;
import com.ssafy.e205.db.entity.FavoriteEntity;
import com.ssafy.e205.db.entity.StoreEntity;
import io.swagger.models.auth.In;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class StoreFavoriteController {

    @Autowired
    StoreService storeService = new StoreServiceImpl();

    @Autowired
    FavoriteService favoriteService = new FavoriteServiceImpl();

    @Operation(summary = "Store & Favorite Controller", description = "user Store info & Favorite place info")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/getAllStore")
    public ResponseEntity<List<StoreEntity>> getAllStoreEntity(){
        return new ResponseEntity<List<StoreEntity>>(storeService.getStoreEntityAll(), HttpStatus.OK);
    }

    @GetMapping("/getAllFavorite")
    public ResponseEntity<List<FavoriteEntity>> getAllFavoriteEntity(){
        return new ResponseEntity<List<FavoriteEntity>>(favoriteService.getFavoriteEntityAll(), HttpStatus.OK);
    }

    @GetMapping("/getStore/{email}")
    public ResponseEntity<StoreEntity> getStoreEntity(@PathVariable String email){
        return new ResponseEntity<StoreEntity>(storeService.getStoreEntity(email), HttpStatus.OK);
    }
    @GetMapping("/getFavorite/{email}")
    public ResponseEntity<FavoriteEntity> getFavoriteEntity(@PathVariable String email){
        return new ResponseEntity<FavoriteEntity>(favoriteService.getFavoriteEntity(email), HttpStatus.OK);
    }
    @PostMapping("/setStore")
    public ResponseEntity<Integer> saveStoreEntity(@RequestBody StoreDto dto){
        return new ResponseEntity<Integer>(storeService.saveStoreEntity(dto), HttpStatus.OK);
    }
    @PostMapping("/setFavorite")
    public ResponseEntity<Integer> saveFavoriteEntity(@RequestBody FavoriteDto dto){
        return new ResponseEntity<Integer>(favoriteService.saveFavoriteEntity(dto), HttpStatus.OK);
    }
    @DeleteMapping("/deleteStore/{email}")
    public ResponseEntity<Integer> deleteStoreEntity(@PathVariable String email){
        return new ResponseEntity<Integer>(storeService.deleteByEmail(email), HttpStatus.OK);
    }
//    @DeleteMapping("/deleteStore/{email}")
//    public ResponseEntity<Integer> deleteFavoriteEntity(@PathVariable String email){
//        return new ResponseEntity<Integer>(favoriteService.deleteByEmail(email), HttpStatus.OK);
//    }
}

