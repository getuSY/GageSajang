package com.ssafy.e205.api.service.Favorite;

import com.ssafy.e205.db.entity.FavoriteEntity;
import com.ssafy.e205.db.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    @Autowired
    private FavoriteRepository repository;

    @Override
    public FavoriteEntity getFavoriteEntity(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public void saveFavoriteEntity(FavoriteEntity favoriteEntity) {
        repository.save(favoriteEntity);
    }
}
