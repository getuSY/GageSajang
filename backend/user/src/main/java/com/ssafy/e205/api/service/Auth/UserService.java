package com.ssafy.e205.api.service.Auth;

import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.db.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {
    UserDto findById(Long id);
    UserDto findByAccessToken(String token);
    Optional<UserEntity> findByEmail(String email);
    int findByEmailToState(String email);
    List<UserDto> findAll();

    void deleteByEmail(String email);
    void save(UserDto userDto);
    void updateState(int state, String email);

    boolean checkPassword(String inputPassword, String email);
}
