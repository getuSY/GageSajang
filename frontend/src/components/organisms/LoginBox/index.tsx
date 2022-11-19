import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UnsetLabelInput from '../../molecules/UnsetLabelInput/index';
import Button from '../../atoms/Button/index';
import CheckLabelInput from '../../molecules/CheckLabelInput/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserModel } from '../../../models/user';
import { useUserLogin, useUserInfo } from '../../../hooks/user';

const LoginBox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mutation = useUserLogin();
  const { data, isLoading, isSuccess, isError, error } = mutation;
  const { data: userInfo } = useUserInfo();

  const toRegister = () => {
    navigate('/user/register');
  };

  const [loginInputs, setLoginInputs] = useState<UserModel>({
    accessToken: 'string', // 고정
    auth: 'user', // 고정
    id: 0, // 고정
    refreshToken: 'string', // 고정
    state: 0, // 고정
    type: 'local', // 고정
    nickName: 'string', // 고정
    email: 'string',
    pw: 'string',
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      alert('로그인 실패!');
    }
    if (isSuccess) {
      sessionStorage.setItem('email', loginInputs.email);
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (userInfo) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [userInfo]);

  const onClickHandler = () => {
    mutation.mutate(loginInputs);
  };

  return (
    <Wrapper>
      <UnsetLabelInput
        type="email"
        label="ID"
        placeholder="gagesajang@email.com"
        style={lineStyle}
        id="email"
        onChange={onChangeHandler}
      />
      <UnsetLabelInput
        type="password"
        label="PASSWORD"
        placeholder="숫자, 영어, 특수문자 포함 9~15자"
        style={lineStyle}
        id="pw"
        onChange={onChangeHandler}
      />
      <CheckLabelInput label="로그인 유지" />
      <ButtonBox>
        <Button type="main" style={buttonStyle} onClick={onClickHandler}>
          로그인
        </Button>
        <Button type="border" style={buttonStyle} onClick={toRegister}>
          회원가입
        </Button>
      </ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  background: linear-gradient(#ffffff 0 0) padding-box,
    linear-gradient(to right, #01ad7c, #fff80b) border-box;
  color: #313149;
  padding: 5rem;
  border: 10px solid transparent;
  border-radius: 20px;
  width: 350px;
  height: 350px;
  /* margin: 75px 0; */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  margin: 0 auto;
  gap: 2rem;
`;

const lineStyle = {
  width: '350px',
};

const flexStyle: object = {
  margin: '2rem',
};

const buttonStyle = {
  width: '100px',
  height: '40px',
};

export default LoginBox;
