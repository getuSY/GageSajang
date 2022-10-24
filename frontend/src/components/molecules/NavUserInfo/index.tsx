import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { User } from '../../../models/user';

interface NavUserInfoProps {
  userInfo: User;
}

const NavUserInfo = ({ userInfo }: NavUserInfoProps) => {
  return (
    <Wrapper>
      <img
        src="https://intermusicakorea.com/common/img/default_profile.png"
        alt=""
        className="profile-img"
      />
      <div className="username">{userInfo.username}</div>
      <Button
        style={{
          fontSize: '16px',
          width: '90px',
          height: '36px',
        }}
        type="border"
      >
        로그아웃
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & .username {
    font-size: 22px;
  }
`;

export default NavUserInfo;
