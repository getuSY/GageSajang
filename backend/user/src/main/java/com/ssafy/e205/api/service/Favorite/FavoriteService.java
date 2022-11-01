package com.ssafy.e205.api.service.Favorite;

import com.ssafy.e205.api.dto.FavoriteDto;
import com.ssafy.e205.db.entity.FavoriteEntity;

import java.util.List;

public interface FavoriteService {
    FavoriteEntity getFavoriteEntity(String email);
    int saveFavoriteEntity(FavoriteDto favoriteDto);
    List<FavoriteEntity> getFavoriteEntityAll();
    int deleteUserAll(String email);
    int delete(String email, String address);
}
