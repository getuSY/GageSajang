package com.example.gateway.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
public class controller {
    @Autowired
    Environment env;

    @GetMapping("/check")
    public String check(HttpServletRequest request){

        log.info("Server port={}", request.getServerPort());

        return String.format("First Service Port %s", env.getProperty("local.server.port"));
    }

    @GetMapping("/test")
    public String test(){
        return "hello?";
    }
}
