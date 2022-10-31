package com.ssafy.e205.api.service;

public interface KafkaProducerService {
    public void producerToUser(String message);
    public void producerToAnlz(String message);
}
