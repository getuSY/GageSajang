import React from 'react';
import styled from 'styled-components';
import Transitions from '../../atoms/Transition';
import RoundBox from '../../atoms/RoundBox/index';
import Button from '../../atoms/Button/index';
import { useNavigate } from 'react-router-dom';
import DoubledBox from '../../molecules/DoubledBox/index';
import Input from '../../atoms/Input/index';

interface ProfessionalStorePageProps {}

const ProfessionalStorePage = ({}: ProfessionalStorePageProps) => {
  const navigate = useNavigate();
  const toProRes = () => {
    navigate('/professional/result');
  };
  // const year = new Date().getFullYear();
  // const years = Array.from(new Array(20), (val, index) => index + year);
  return (
    <Transitions>
      <Wrapper>
        {/* <span>이미 사장 가게 정보 입력 페이지입니다.</span> */}
        <BoxRow>
          {/* <RoundBox style={leftBoxStyle}>
            <InnerBox>
              <UnsetLabelInput
                label="가게 이름"
                type="text"
                placeholder="가게 이름을 입력해주세요."
                style={{ width: '300px' }}
              ></UnsetLabelInput>
              <UnsetLabelInput
                label="가게 개업 날짜"
                type="date"
                placeholder="가게 개업일을 입력해주세요."
                style={{ width: '300px' }}
              ></UnsetLabelInput>
            </InnerBox>
          </RoundBox> */}
          <InnerBox>
            <Input placeholder="가게 이름을 입력해주세요"></Input>
            <SelectBox>
              <option value="none">구 선택</option>
              <option value="관악구">관악구</option>
              <option value="동작구">동작구</option>
              <option value="성북구">성북구 </option>
            </SelectBox>
          </InnerBox>
          <RoundBox style={rightBoxStyle}>
            <InfoBox>
              <InfoList></InfoList>
              <DoubledBox
                title="가게 정보 입력"
                style={{ 'background-color': 'green' }}
              />
            </InfoBox>
          </RoundBox>
        </BoxRow>
        <Button type="blur" onClick={toProRes}>
          내 가게 분석하기
        </Button>
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #f6fff7; */
  background-color: #e4fae6;
  background-size: cover;
  width: 100%;
  height: auto !important;
  min-height: 100%;
  & body {
    background-color: #e4fae6;
  }
`;

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  margin: 5rem auto;
`;

const leftBoxStyle = {
  width: '400px',
  height: '600px',
};

const rightBoxStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'start',
  'align-items': 'center',
  width: '1000px',
  height: '600px',
};

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  gap: 2.5rem;
  margin: 1rem;
`;

const InfoList = styled.ul`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoListItem = styled.li`
  font-size: 28px;
  font-weight: bold;
`;

const InfoBox = styled.div`
  width: 200px;
  height: 500px;
  border: 2px solid;
`;

const SelectBox = styled.select`
  height: 60px;
  width: 200px;
  background-color: ${({ theme }) => theme.subColor};
  border: none;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0px 0px 20px 5px #ebebeb;
`;

export default ProfessionalStorePage;
