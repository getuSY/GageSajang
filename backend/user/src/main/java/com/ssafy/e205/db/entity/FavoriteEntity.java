package com.ssafy.e205.db.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Table(
        name = "Favorite"
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class FavoriteEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;
    @Column(name="favorite_name")
    private String favoriteName;
    @Column(name="favorite_address")
    private String favoriteAddress;

    @Builder
    public FavoriteEntity(String email, String favoriteName, String favoriteAddress){
        this.email = email;
        this.favoriteAddress = favoriteAddress;
        this.favoriteName = favoriteName;
    }
}
