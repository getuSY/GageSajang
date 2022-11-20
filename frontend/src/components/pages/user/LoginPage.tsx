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
        <LoginTitle>당신의 비즈니스 파트너, 가게사장</LoginTitle>
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
  margin-top: 1rem;
`;

const LoginPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.p`
  font-size: 25px;
  font-family: 'GmarketSansMedium';
  background: ${({ theme }) => `${theme.gradColor}`};
  color: transparent;
  -webkit-background-clip: text;
  font-weight: 700;
`;

export default LoginPage;
