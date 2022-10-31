package com.ssafy.e205.api.service.Kafka;

public interface KafkaProducerService {
    public void sendMessage(String message);
    public void sendMessageSub(String message);
}
