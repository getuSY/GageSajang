package com.ssafy.e205.api.service.Auth;

import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.db.entity.UserEntity;
import com.ssafy.e205.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDto findById(Long id) {
        return new UserDto(repository.findById(id));
    }

    @Override
    public UserDto findByAccessToken(String token) {
        return new UserDto(repository.findByAccessToken(token));
    }

    @Override
    public Optional<UserEntity> findByEmail(String email) {
//        UserDto userDto = new UserDto(repository.findByEmail(email));
        return repository.findByEmail(email);
    }

    @Override
    public int findByEmailToState(String email) {
        int state = repository.findByEmailToState(email);
        return state;
    }

    @Override
    public List<UserDto> findAll() {
        List<UserDto> userDtos = new ArrayList<>();
        for(UserEntity userEntity : repository.findAll()){
            userDtos.add(new UserDto(userEntity));
        }
        return userDtos;
    }

    @Override
    public void deleteByEmail(String email) {
        repository.deleteByEmail(email);
    }

    @Override
    public void save(UserDto userDto) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        userDto.setPw(encoder.encode(userDto.getPw()));
        UserEntity userEntity = new UserEntity(userDto);
        System.out.println("UserServiceImpl save : " + userEntity);
        repository.save(userEntity);
    }

    @Override
    public void updateState(int state, String email) {
        repository.updateState(state, email);
    }

    @Override
    public int updateUser(UserDto userDto) {
        UserEntity userEntity = new UserEntity(userDto);
        return repository.saveByEmail(userEntity.getState(), userEntity.getAccessToken(), userEntity.getRefreshToken(), userEntity.getEmail());
    }


    @Transactional
    @Override
    public boolean checkPassword(String inputPassword, String email) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(inputPassword, loadUserByUsername(email).getPw());
    }

    @Override
    public UserEntity loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("loadUserByUserName : " + repository.findByEmail(email));
        return repository.findByEmail(email).orElseThrow(()->new UsernameNotFoundException(email));
    }
}
