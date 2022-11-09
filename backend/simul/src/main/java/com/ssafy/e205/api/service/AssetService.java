package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.ResultDto;
import com.ssafy.e205.api.dto.UserDto;

import java.util.Optional;

public interface AssetService {
    Optional<ResultDto> findByDongNameAndIndustryName(UserDto userDto);
}
