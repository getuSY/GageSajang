package com.ssafy.e205.api.dto;


import com.ssafy.e205.db.entity.UserEntity;
import lombok.*;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDto {
    private Long id;
    private String email;
    private String nickName;
    private String pw;
    private String accessToken;
    private String refreshToken;
    private String type;
    private int state;
    private String auth;

    public List<String> getAuthList(){
        List<String> list = new ArrayList<>();
        String[] strings = auth.split(",");
        Collections.addAll(list, strings);
        return list;
    }

    @Builder
    public UserDto(UserEntity userEntity){
        this.id = userEntity.getId();
        this.email = userEntity.getEmail();
        this.accessToken = userEntity.getAccessToken();
        this.refreshToken = userEntity.getRefreshToken();
        this.nickName = userEntity.getNickName();
        this.type = userEntity.getType();
        this.pw = userEntity.getPw();
        this.state = userEntity.getState();
    }

    public UserDto(Optional<UserEntity> userEntity) {
        this.id = userEntity.get().getId();
        this.email = userEntity.get().getEmail();
        this.accessToken = userEntity.get().getAccessToken();
        this.refreshToken = userEntity.get().getRefreshToken();
        this.nickName = userEntity.get().getNickName();
        this.type = userEntity.get().getType();
        this.pw = userEntity.get().getPw();
        this.state = userEntity.get().getState();
    }
}
