package com.ssafy.e205.api.controller;

import com.ssafy.e205.api.service.Kafka.KafkaProducerService;
import com.ssafy.e205.api.service.Kafka.KafkaProducerServiceImpl;
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


    @PostMapping(value = "/message")
    public String sendMessage(@RequestParam("message") String message) {
        this.producer.sendMessage(message);
        return "success";
    }

    @PostMapping(value = "/messageSub")
    public String sendMessageSub(@RequestParam("message") String message) {
        this.producer.sendMessageSub(message);
        return "success";
    }
}
