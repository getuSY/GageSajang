package com.ssafy.e205.api.service.Favorite;

import com.ssafy.e205.db.entity.FavoriteEntity;

public interface FavoriteService {
    FavoriteEntity getFavoriteEntity(String email);
    void saveFavoriteEntity(FavoriteEntity favoriteEntity);
}
