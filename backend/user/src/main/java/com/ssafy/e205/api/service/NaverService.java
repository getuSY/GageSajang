package com.ssafy.e205.api.service;

public interface NaverService {
    String getNaverToken(String code, String state);
    String getNaverEmail(String token);
}
