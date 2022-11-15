package com.ssafy.e205.api.service.Kafka;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.api.service.Auth.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class KafkaConsumerServiceImpl implements KafkaConsumerService{

    private final static String topicName = "TOPICNAME";

    @Autowired
    UserService userService;

    @KafkaListener(topics = topicName, groupId = ConsumerConfig.GROUP_ID_CONFIG)
    @Override
    public void consumer(String message) {
        System.out.printf("Consumed message : %s%n", message);
        parsing(message);
    }
    private void parsing(String jsonData) {
        UserDto userDto = new UserDto();
        JsonParser jsonParser = new JsonParser();
        JsonElement element = jsonParser.parse(jsonData);

        String email = element.getAsJsonObject().get("email").getAsString();
        String nickname = element.getAsJsonObject().get("nickName").getAsString();
        String pw = element.getAsJsonObject().get("pw").getAsString();
        String type = element.getAsJsonObject().get("type").getAsString();
        int state = 1;
        String auth = "user";
        userDto.setPw(pw);
        userDto.setAuth(auth);
        userDto.setEmail(email);
        userDto.setNickName(nickname);
        userDto.setType(type);
        userDto.setState(state);

        userService.updateUser(userDto);
    }
}
