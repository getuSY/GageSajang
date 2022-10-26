package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.UserDto;

public interface KakaoService {
    String getKaKaoAccessToken(String code);
    UserDto createKaKaoUser(String token); // change void to UserDto
    void logoutKaKaoUser(String token);
    long expirationKaKaoToken(String token);
}
