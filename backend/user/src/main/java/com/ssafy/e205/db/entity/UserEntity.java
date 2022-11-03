package com.ssafy.e205.db.entity;

import com.ssafy.e205.api.dto.UserDto;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Getter
@Entity
@Table(
        name = "user"
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class UserEntity implements UserDetails {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;
    @Column(name="nickname")
    private String nickName;
    @Column(name="pw")
    private String pw;
    @Column(name="access_token")
    private String accessToken;
    @Column(name="refresh_token")
    private String refreshToken;
    @Column(name="type")
    private String type;
    @Column(name="state")
    private int state;
    @Column(name="auth")
    private String auth;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> roles = new HashSet<>();
        for (String role : auth.split(",")){
            roles.add(new SimpleGrantedAuthority(role));
        }
        return roles;
    }

    @Override
    public String getPassword() {
        return getPw();
    }

    @Override
    public String getUsername() {
        return getUsername();
    }
    // 계정 만료 여부 반환
    @Override
    public boolean isAccountNonExpired() {
        // 만료되었는지 확인하는 로직
        return true; // true -> 만료되지 않았음
    }

    // 계정 잠금 여부 반환
    @Override
    public boolean isAccountNonLocked() {
        // 계정 잠금되었는지 확인하는 로직
        return true; // true -> 잠금되지 않았음
    }

    // 패스워드의 만료 여부 반환
    @Override
    public boolean isCredentialsNonExpired() {
        // 패스워드가 만료되었는지 확인하는 로직
        return true; // true -> 만료되지 않았음
    }

    // 계정 사용 가능 여부 반환
    @Override
    public boolean isEnabled() {
        // 계정이 사용 가능한지 확인하는 로직
        return true; // true -> 사용 가능
    }
    @Builder
    public UserEntity(Long id, String email, String accessToken, String refreshToken, String nickName, String pw, int state, String auth, String type){
        this.id = id;
        this.email = email;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.nickName = nickName;
        this.pw = pw;
        this.state = state;
        this.auth = auth;
        this.type = type;
    }

    @Builder
    public UserEntity(UserDto userDto){
        this.id = userDto.getId();
        this.email = userDto.getEmail();
        this.accessToken = userDto.getAccessToken();
        this.refreshToken = userDto.getRefreshToken();
        this.nickName = userDto.getNickName();
        this.pw = userDto.getPw();
        this.state = userDto.getState();
        this.type = userDto.getType();
        this.auth = userDto.getAuth();
    }
}
