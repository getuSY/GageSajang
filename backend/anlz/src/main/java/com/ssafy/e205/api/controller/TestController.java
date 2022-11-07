package com.ssafy.e205.api.controller;

import com.ssafy.e205.E205Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/anlz")
public class TestController {
    @Autowired
    E205Application application;

    @GetMapping("/test")
    public String test(){
        return "anlz application test port : " + application.portNum;
    }
}
