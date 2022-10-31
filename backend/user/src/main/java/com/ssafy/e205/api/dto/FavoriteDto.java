package com.ssafy.e205.api.dto;

import com.ssafy.e205.db.entity.FavoriteEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FavoriteDto {
    private Long id;
    private String email;
    private String favoriteName;
    private String favoriteAddress;

    public FavoriteDto(FavoriteEntity favoriteEntity){
        this.id = favoriteEntity.getId();
        this.email = favoriteEntity.getEmail();
        this.favoriteAddress = favoriteEntity.getFavoriteAddress();
        this.favoriteName = favoriteEntity.getFavoriteName();
    }

    public FavoriteEntity toEntity(FavoriteDto dto){
        return FavoriteEntity.builder()
                .email(dto.email)
                .favoriteAddress(dto.favoriteAddress)
                .favoriteName(dto.favoriteName)
                .build();
    }
}
