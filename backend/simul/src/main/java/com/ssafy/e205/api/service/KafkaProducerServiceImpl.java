package com.ssafy.e205.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaProducerServiceImpl implements KafkaProducerService{

    private final static String topicNameToUser = "TOPICNAME_User";
    private final static String topicNameToAnlz = "TOPICNAME_Anlz";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;


    @Override
    public void producerToUser(String message) {
        System.out.printf("Produce message to user : %s%n", message);
        this.kafkaTemplate.send(topicNameToUser, message);

    }

    @Override
    public void producerToAnlz(String message) {
        System.out.printf("Produce message to user : %s%n", message);
        this.kafkaTemplate.send(topicNameToAnlz, message);
    }
}
