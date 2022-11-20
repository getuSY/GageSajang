import React from 'react';
import styled from 'styled-components';
import LoginBox from '../../organisms/LoginBox';

const LoginPage = () => {
  return (
    <Wrapper>
      <dialog open>
        asd
        <button>OK</button>
      </dialog>
      <img
        src="/assets/img/login_img.png"
        style={loginImg}
        alt="login_gage_open_image"
      />
      <LoginPageBox>
        <LoginTitle>
          나만의 가게를 열고 싶나요?<br></br>'가게 사장'이 도와드릴게요!
        </LoginTitle>
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
  font-size: 40px;
  font-weight: bold;
  text-align: start;
`;

export default LoginPage;
