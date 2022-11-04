import React, { useState } from 'react';
import styled from 'styled-components';
import UnsetLabelInput from '../../molecules/UnsetLabelInput/index';
import Button from '../../atoms/Button/index';
import CheckLabelInput from '../../molecules/CheckLabelInput/index';
import { useNavigate } from 'react-router-dom';

interface LoginBoxProps {}

const LoginBox = ({}: LoginBoxProps) => {
  // let [ userId, setUserId ] = useState("")
  // let [ password, setPassword ] = useState("")
  const navigate = useNavigate();
  const toRegister = () => {
    navigate('/user/register');
  };
  const toHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <UnsetLabelInput
        type="email"
        label="ID"
        placeholder="gagesajang@email.com"
        style={lineStyle}
      />
      <UnsetLabelInput
        type="password"
        label="PASSWORD"
        placeholder="숫자, 영어, 특수문자 포함 9~15자"
        style={lineStyle}
      />
      <CheckLabelInput label="로그인 유지" />
      <ButtonBox>
        <Button type="main" style={buttonStyle} onClick={toHome}>
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
