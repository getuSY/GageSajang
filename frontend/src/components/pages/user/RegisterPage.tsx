import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UnsetLabelInput from '../../molecules/UnsetLabelInput';
import Button from '../../atoms/Button/index';
import { useNavigate } from 'react-router-dom';
import { useUserSignUp } from '../../../hooks/user';
import { UserModel } from '../../../models/user';
import { userOverlap } from '../../../api/user';

const RegisterPage = () => {
  const navigate = useNavigate();

  const mutation = useUserSignUp();
  const { isSuccess } = mutation;
  const [signUpInputs, setSignUpInputs] = useState<UserModel>({
    accessToken: 'string', // 고정
    auth: 'user', // 고정
    id: 0, // 고정
    refreshToken: 'string', // 고정
    state: 0, // 고정
    type: 'local', // 고정
    email: 'string',
    nickName: 'string',
    pw: 'string',
  });
  const [signUpError, setSignUpError] = useState({
    email: false,
    pw: false,
    pwConfirm: false,
    nickName: false,
  });
  const [emailOverlapError, setEmailOverlapError] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInputs({
      ...signUpInputs,
      [e.target.id]: e.target.value,
    });
  };

  const onClickHandler = () => {
    mutation.mutate(signUpInputs);
  };

  useEffect(() => {
    if (isSuccess) {
      alert('회원가입 완료!');
      navigate('/');
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    userOverlap(signUpInputs.email)
      .then((res) => console.log(res))
      .catch((e) => setEmailOverlapError(true));
    if (signUpInputs.email && signUpInputs.email) {
      setSignUpError((signUpError) => ({ ...signUpError, email: true }));
    } else {
      setSignUpError((signUpError) => ({ ...signUpError, email: false }));
    }
  }, [signUpInputs.email]);

  useEffect(() => console.log('pw', signUpInputs.pw), [signUpInputs.pw]);

  return (
    <Wrapper>
      <RegisterTitle>가게 사장 회원 가입</RegisterTitle>
      <RegisterBox>
        <UnsetLabelInput
          type="email"
          id="email"
          label="ID(E-mail)"
          placeholder="gagesajang@email.com"
          onChange={onChangeHandler}
        />
        <UnsetLabelInput
          type="password"
          id="pw"
          label="PASSWORD"
          placeholder="숫자, 영어, 특수문자 포함 9~15자"
          onChange={onChangeHandler}
        />
        <UnsetLabelInput
          type="password"
          id="pwconfirm"
          label="PASSWORD CONFIRM"
          placeholder="위에 입력한 비밀번호와 동일하게 입력"
        />
        <UnsetLabelInput
          type="text"
          id="nickName"
          label="NICKNAME"
          placeholder="한글 2~10자, 영어 3~15자, 특수문자 불포함"
          onChange={onChangeHandler}
        />
        <Button type="main" onClick={onClickHandler}>
          회원가입
        </Button>
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
  gap: 2.5rem;
  background: linear-gradient(#ffffff 0 0) padding-box,
    linear-gradient(to right, #01ad7c, #fff80b) border-box;
  color: #313149;
  padding: 5rem;
  border: 10px solid transparent;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  margin: 1rem 0;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`;

const RegisterTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  background: ${({ theme }) => theme.gradColor};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export default RegisterPage;
