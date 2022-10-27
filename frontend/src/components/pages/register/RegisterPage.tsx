import React from 'react';
import styled from 'styled-components';
import UnsetLabelInput from '../../molecules/UnsetLabelInput';
import Button from '../../atoms/Button/index';

const RegisterPage = () => {
  return (
    <Wrapper>
      <RegisterTitle>가게 사장 회원 가입</RegisterTitle>
      <RegisterBox>
        <UnsetLabelInput
          label="ID(E-mail)"
          placeholder="gagesajang@email.com"
        ></UnsetLabelInput>
        <UnsetLabelInput
          label="PASSWORD"
          placeholder="숫자, 영어, 특수문자 포함 9~15자"
        ></UnsetLabelInput>
        <UnsetLabelInput
          label="PASSWORD CONFIRM"
          placeholder="위에 입력한 비밀번호와 동일하게 입력"
        ></UnsetLabelInput>
        <UnsetLabelInput
          label="NAME"
          placeholder="한글 2~10자, 영어 3~15자, 특수문자 불포함"
        ></UnsetLabelInput>
        <Button type="main">회원가입</Button>
      </RegisterBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: linear-gradient(#ffffff 0 0) padding-box,
    linear-gradient(to right, #01ad7c, #fff80b) border-box;
  color: #313149;
  padding: 5rem;
  border: 10px solid transparent;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  margin: 75px 0;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const RegisterTitle = styled.p`
  font-size: 40px;
  /* font-style: bold; */
  /* background-color: linear(#01ad7c, #37e19d, #fff80b); */
`;

export default RegisterPage;
