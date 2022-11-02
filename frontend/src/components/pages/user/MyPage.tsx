import React from 'react';
import styled from 'styled-components';
import LeftLineTitle from '../../atoms/LeftLineTitle/index';
import RoundBox from '../../atoms/RoundBox/index';
import WhiteLabelInput from '../../molecules/WhiteLabelInput/index';
import Button from '../../atoms/Button/index';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

interface MyPageProps {
  style?: object;
  children?: React.ReactElement;
  page?: 'mypage' | 'mystore' | 'myarea';
}

const MyPage = ({ page, style, children }: MyPageProps) => {
  // const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const toUserInfo = () => {
    navigate('/user/mypage');
  };
  const toMyStore = () => {
    navigate('/user/mystore');
  };
  const toMyArea = () => {
    navigate('/user/myarea');
  };

  console.log(page);

  return (
    <Wrapper>
      <SideIndex>
        <SideIndexItem id="mypage_selected" onClick={toUserInfo}>
          회원 정보 수정
        </SideIndexItem>
        {page === 'mypage' ? <hr className="colordLine" /> : <hr />}
        <SideIndexItem id="mystore_selected" onClick={toMyStore}>
          내 가게 정보
        </SideIndexItem>
        {page === 'mystore' ? <hr className="colordLine" /> : <hr />}
        <SideIndexItem id="myarea_selected" onClick={toMyArea}>
          내 관심 상권
        </SideIndexItem>
        {page === 'myarea' && <hr className="colordLine" />}
      </SideIndex>
      {/* <RoundBox style={leftBoxStyle} /> */}
      {page === 'mypage' && (
        <RightBox>
          <LeftLineTitle style={indexStyle}>회원 정보 수정</LeftLineTitle>
          <RoundBox>
            <InsideBox>
              <WhiteLabelInput
                type="text"
                label="이메일"
                // placeholder="이메일을 확인해주세요."
                value="gagesajang@gmail.com"
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="text"
                label="이름"
                placeholder="이름을 입력해주세요."
              />
              <WhiteLabelInput
                type="password"
                label="비밀번호"
                placeholder="바꿀 비밀번호를 입력해주세요."
              />
              <WhiteLabelInput
                type="password"
                label="비밀번호 확인"
                placeholder="바꿀 비밀번호를 다시 한 번 입력해주세요."
              />
              <Button type="main">수정</Button>
            </InsideBox>
          </RoundBox>
        </RightBox>
      )}
      {page === 'mystore' && (
        <RightBox>
          <LeftLineTitle style={indexStyle}>내 가게 정보</LeftLineTitle>
          <RoundBox>
            <InsideBox>
              <WhiteLabelInput
                type="text"
                label="가게 이름"
                placeholder="가게 이름을 입력해주세요."
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="text"
                label="가게 주소"
                placeholder="가게 주소를 입력해주세요."
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="text"
                label="가게"
                placeholder="가게 이름을 입력해주세요."
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="text"
                label="사업자 등록번호"
                placeholder="사업자 등록 번호를 입력해주세요."
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="number"
                label="가게 면적"
                placeholder="가게 면적을 입력해주세요."
              ></WhiteLabelInput>
              <WhiteLabelInput
                type="number"
                label="직원 수"
                placeholder="직원 수를 입력해주세요."
              ></WhiteLabelInput>
              <Button type="main">수정</Button>
            </InsideBox>
          </RoundBox>
        </RightBox>
      )}
      {page === 'myarea' && (
        <RightBox>
          <LeftLineTitle style={indexStyle}>내 관심 상권</LeftLineTitle>
          <RoundBox>
            <InsideBox>
              <WhiteLabelInput
                type="text"
                label="내 관심 상권"
                placeholder="관심 상권을 입력해주세요."
              ></WhiteLabelInput>
              <Button type="main">수정</Button>
            </InsideBox>
          </RoundBox>
        </RightBox>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;
  margin-top: 2rem;
`;

const indexStyle = {
  'font-size': '30px',
  'font-weight': 'bold',
};

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;
  gap: 2rem;
  /* & div > input {
    cursor: none;
  } */
  & button {
    margin: 2rem auto;
  }
`;

const SideIndex = styled.ul`
  font-size: 20px;
  list-style: none;
  margin: auto 3rem;
  padding: 1rem;
  & .colordLine {
    border: 7px solid #53c882;
  }
`;

const SideIndexItem = styled.li`
  margin: 3rem 0;
  text-align: center;
  cursor: pointer;
`;

export default MyPage;
