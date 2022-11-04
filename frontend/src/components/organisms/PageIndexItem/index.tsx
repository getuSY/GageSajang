import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';

// 이미사장, 아마사장 메인 페이지

interface PageIndexItemProps {
  type: 'pro' | 'ama';
}

const PageIndexItem = ({ type }: PageIndexItemProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const toProStore = () => {
    navigate('/professional/store');
  };
  return (
    <Wrapper>
      {type === 'pro' ? (
        <>
          <div className="content left">
            <div>
              <div>내 가게 진단을 위해 가게 정보가 필요합니다.</div>
              <div>정보를 입력해주세요.</div>
            </div>
            <Button type="blur" onClick={toProStore}>
              내 가게 정보 입력
            </Button>
          </div>
          <div className="img-div">
            <img src="/assets/img/index_img_pro.png" alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="img-div img-right">
            <img src="/assets/img/index_img_ama.png" alt="" />
          </div>
          <div className="content right">
            <div>
              <div>내 가게 진단을 위해 가게 정보가 필요합니다.</div>
              <div>정보를 입력해주세요.</div>
            </div>
            <Button type="blur">내 가게 상상하기</Button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  height: calc(100vh - 65px);
  gap: 30px;

  & .content {
    flex-grow: 1;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: 'Eoe_Zno_M';
    font-size: 1.3rem;
  }
  & .left {
    margin-left: 10vw;
  }
  & .right {
    margin-right: 10vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  & .img-div {
    flex-grow: 1;
    width: 60%;
  }
  & img {
    width: 100%;
    max-width: 800px;
    /* height: 675px; */
    filter: drop-shadow(200px 100px 50px rgba(0, 0, 0, 0.25));
  }
  & .img-right {
    display: flex;
    justify-content: end;
  }
`;

export default PageIndexItem;
