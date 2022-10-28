package com.ssafy.e205.api.service.Kafka;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerServiceImpl implements KafkaConsumerService{

    private final static String topicName = "TOPICNAME";

    @KafkaListener(topics = topicName, groupId = ConsumerConfig.GROUP_ID_CONFIG)
    @Override
    public void consumer(String message) {
        System.out.println(String.format("Consumed message : %s", message));
    }
}
