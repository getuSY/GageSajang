import React from 'react';
import styled from 'styled-components';
import LoginBox from '../../organisms/LoginBox';

const LoginPage = () => {
  return (
    <Wrapper>
      <img
        src="/assets/img/login_img.png"
        style={loginImg}
        alt="login_gage_open_image"
      />
      <LoginPageBox>
        <span>나만의 가게를 열고 싶나요?</span>
        <span>가게 사장이 도와드릴게요!</span>
        <LoginBox />
      </LoginPageBox>
    </Wrapper>
  );
};

const loginImg: object = {
  height: '800px',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const LoginPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
