import React from 'react';
import styled from 'styled-components';
import BorderButton from '../../common/atoms/BorderButton';

interface userType {
  username: String;
}

interface NavUserInfoProps {
  userInfo: userType;
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
      <BorderButton
        content="로그아웃"
        style={{
          fontSize: '16px',
          width: '90px',
          height: '36px',
        }}
      />
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
