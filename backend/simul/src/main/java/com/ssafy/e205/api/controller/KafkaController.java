package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.service.KafkaProducerService;
import com.ssafy.e205.api.service.KafkaProducerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/kafka")
public class KafkaController {
    @Autowired
    private KafkaProducerService producer = new KafkaProducerServiceImpl();


    @PostMapping(value = "/messageToUser")
    public String sendMessageToUser(@RequestParam("message") String message) {
        this.producer.producerToUser(message);
        return "success";
    }

    @PostMapping(value = "/messageToAnlz")
    public String sendMessageToAnlz(@RequestParam("message") String message) {
        this.producer.producerToAnlz(message);
        return "success";
    }

}
