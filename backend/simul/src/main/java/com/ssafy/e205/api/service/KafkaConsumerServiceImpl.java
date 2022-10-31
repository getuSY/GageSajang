package com.ssafy.e205.api.service;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerServiceImpl implements KafkaConsumerService{

    private final static String topicName = "TOPICNAME"; //TOPICNAME will change

    @KafkaListener(topics = topicName, groupId = ConsumerConfig.GROUP_ID_CONFIG)
    @Override
    public void consumer(String message) {
        System.out.printf("Consumed message : %s%n", message);
    }
}
