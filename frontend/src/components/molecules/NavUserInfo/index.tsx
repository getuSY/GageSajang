import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { UserInfo } from '../../../models/user';
import { useNavigate } from 'react-router-dom';
import { useUserLogout } from '../../../hooks/user';

interface NavUserInfoProps {
  userInfo: UserInfo;
}

const NavUserInfo = ({ userInfo }: NavUserInfoProps) => {
  const navigate = useNavigate();
  const toMyPage = () => {
    navigate('/user/mypage');
  };
  const toMyStore = () => {
    navigate('/user/mystore');
  };
  const toMyArea = () => {
    navigate('/user/myarea');
  };

  const logout = useUserLogout();
  return (
    <Wrapper>
      <img
        src="/assets/img/default_profile.png"
        alt=""
        className="profile-img"
      />
      <div className="username">
        {userInfo.nickname}
        {/* <ul>
          <MyPageList onClick={toMyPage}>회원 정보 수정</MyPageList>
          <MyPageList onClick={toMyStore}>내 가게 정보</MyPageList>
          <MyPageList onClick={toMyArea}>내 관심 상권</MyPageList>
        </ul> */}
      </div>
      <Button
        onClick={() => {
          logout();
          navigate('/');
        }}
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
    font-size: 1.2rem;
    padding: 0.6rem;
    position: relative;
  }
  & .username ul {
    display: none;
    z-index: 10000;
    position: absolute;
    top: 28px;
    /* top: 0px; */

    /* right: 165px; */
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    list-style: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 15px 15px;
    font-size: 15px;
    width: 90px;
    height: 120px;
  }
  & .username:hover ul {
    display: visible;
    display: block;
  }
`;

const MyPageList = styled.li`
  background: transparent;
  color: black;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  margin: 0.5rem 0rem 0.5rem -40px;
  padding: 5px 0px;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.subColor};
    display: block;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default NavUserInfo;
