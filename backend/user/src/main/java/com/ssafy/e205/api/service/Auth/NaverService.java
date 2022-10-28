package com.ssafy.e205.api.service.Auth;

import com.ssafy.e205.api.dto.UserDto;

public interface NaverService {
    String getNaverToken(String code, String state);
    UserDto getNaverUserInfo(String accessToken, String refreshToken);
}
