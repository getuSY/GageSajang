package com.ssafy.e205.api.service.Favorite;

import com.ssafy.e205.api.dto.FavoriteDto;
import com.ssafy.e205.db.entity.FavoriteEntity;
import com.ssafy.e205.db.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService{

    @Autowired
    private FavoriteRepository repository;

    @Override
    public FavoriteEntity getFavoriteEntity(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public int saveFavoriteEntity(FavoriteDto favoriteDto) {
        return repository.save(favoriteDto);
    }

    @Override
    public List<FavoriteEntity> getFavoriteEntityAll() {
        return repository.findAll();
    }

    @Override
    public int deleteUserAll(String email) {
        return repository.delete(email);
    }

    @Override
    public int delete(String email, String address) {
        return repository.deleteByEmailAndAddress(email, address);
    }
}
