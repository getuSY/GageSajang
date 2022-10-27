import React from 'react';
import styled from 'styled-components';
import LeftLineTitle from '../../atoms/LeftLineTitle/index';
import RoundBox from '../../atoms/RoundBox/index';
import WhiteLabelInput from '../../molecules/WhiteLabelInput/index';
import Button from '../../atoms/Button/index';

interface MyPageProps {
  style?: object;
  children?: React.ReactElement;
  page: 'mypage' | 'mystore' | 'myarea';
}

interface PageElement {
  title: string;
  info?: React.ReactElement;
}

const MyPage = ({ page, style, children }: MyPageProps) => {
  let pageEl: PageElement = {
    title: '',
    info: <div></div>,
  };
  if (page === 'mypage') {
    pageEl = {
      title: '회원 정보 수정',
      info: (
        <InsideBox>
          <span>이메일 : userInfo 이메일이 들어갈 자리</span>
          <WhiteLabelInput label="이름" placeholder="이름을 입력해주세요." />
          <WhiteLabelInput
            label="비밀번호"
            placeholder="바꿀 비밀번호를 입력해주세요."
          />
          <WhiteLabelInput
            label="비밀번호 확인"
            placeholder="바꿀 비밀번호를 다시 한 번 입력해주세요."
          />
          <Button type="main">수정</Button>
        </InsideBox>
      ),
    };
  } else if (page === 'mystore') {
    pageEl = {
      title: '내 가게 정보',
      info: (
        <InsideBox>
          <div>디브안에 디브</div>
          <Button type="main">수정</Button>
        </InsideBox>
      ),
    };
  } else if (page === 'myarea') {
    pageEl = {
      title: '내 관심 상권',
      info: (
        <InsideBox>
          <Button type="main">수정</Button>
        </InsideBox>
      ),
    };
  }
  return (
    <Wrapper>
      <RoundBox style={leftBoxStyle} />
      <RightBox>
        <LeftLineTitle children={pageEl.title} />
        <RoundBox children={pageEl.info} />
      </RightBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const leftBoxStyle = {
  width: '300px',
};

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;
  gap: 2rem;
`;

export default MyPage;
