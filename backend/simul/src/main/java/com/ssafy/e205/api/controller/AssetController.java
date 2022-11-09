package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.dto.ResultDto;
import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.api.service.AssetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


/**
 * @brief : Assessment Controller
 * @details : 경영 환경 진단 에 대한 처리를 해주는 Controller
 * @date 2022-11-08
 * @author : LDY, 98dlstod@naver.com
 */

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/asset")
public class AssetController {

    @Autowired
    AssetService service;

    /** @brief : Swagger responseCode 설정
     *  @date : 2022-11-08
     *  @author : LDY, 98dlstod@naver.com
     */
    @Operation(summary = "Simulation controller", description = "Simulation controller 이미사장, 아마사장을 위한 시뮬레이션 컨트롤러")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })

    /** @brief : 이미 사장의 경영환경진단
     *  @date : 2022-11-08
     *  @param  : userDto
     *  @return : ResponseEntity<List<Integer>>
     *  @author : LDY, 98dlstod@naver.com
     */
    @PostMapping(value = "/already")
    public ResponseEntity<Optional<ResultDto>> residentListforAlready(@Parameter(description = "object", required = true, example = "User dto")@RequestBody  UserDto dto) {
        System.out.println(dto);
        return new ResponseEntity<Optional<ResultDto>>(service.assesmentforAlready(dto), HttpStatus.OK);
    }
}
