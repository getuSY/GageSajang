import React from 'react';
import styled from 'styled-components';
import UnsetLabelInput from '../../molecules/UnsetLabelInput/index';
import Button from '../../atoms/Button/index';
import CheckLabelInput from '../../molecules/CheckLabelInput/index';

interface LoginBoxProps {}

const flexStyle: object = {
  margin: '2rem',
};

const LoginBox = ({}: LoginBoxProps) => {
  return (
    <Wrapper>
      <UnsetLabelInput label="ID" placeholder="gagesajang@email.com" />
      <UnsetLabelInput
        label="PASSWORD"
        placeholder="숫자, 영어, 특수문자 포함 9~15자"
      />
      <CheckLabelInput label="로그인 유지" />
      <Button type="main" style={flexStyle}>
        로그인
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default LoginBox;
