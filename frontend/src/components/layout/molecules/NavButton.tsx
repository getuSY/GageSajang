import React from 'react';
import styled from 'styled-components';
import BorderButton from '../../common/atoms/BorderButton';
import GradButton from '../../common/atoms/GradButton';

const navButtonStyle = { width: '120px', height: '44px', fontSize: '1rem' };

type NavButtonProps = {
  toLogin: any;
  toRegister: any;
};

const NavButton = ({ toLogin, toRegister }: NavButtonProps) => {
  return (
    <Wrapper>
      <GradButton
        content="회원가입"
        style={navButtonStyle}
        onClick={toRegister}
      />
      <BorderButton content="로그인" style={navButtonStyle} onClick={toLogin} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default NavButton;
