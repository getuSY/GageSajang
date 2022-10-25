package com.ssafy.e205.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class AuthController {

    @GetMapping("/test")
    public String test(){
        return "hello?";
    }

}
