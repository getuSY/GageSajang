package com.ssafy.e205.api.service.Kafka;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaProducerServiceImpl implements KafkaProducerService{

    private String topicName = "TOPICNAME";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

//    @Autowired
//    public KafkaProducerServiceImpl(KafkaTemplate kafkaTemplate) {
//        this.kafkaTemplate = kafkaTemplate;
//    }

    @Override
    public void sendMessage(String message) {
        System.out.printf("Produce message : %s%n", message);
        this.kafkaTemplate.send(topicName, message);

    }
}
