import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface StatusTrendProps {}

const StatusTrend = ({}: StatusTrendProps) => {
  const [trend, setTrend] = useState(0);
  const dummy = [
    '광진구',
    '양천구',
    '강서구',
    '성북구',
    '강북구',
    '은평구',
    '도봉구',
    '노원구',
    '종로구',
    '서대문구',
  ];
  useEffect(() => {
    setInterval(() => setTrend((trend) => (trend + 1) % 10), 2000);
  }, []);

  return (
    <Wrapper>
      <Title>👑 요즘 뜨는 상권 Top10</Title>
      <Group>
        {dummy.map((value, i) => (
          <div
            className={trend === i ? `gu-div trend` : `gu-div`}
            key={`gu-${i}`}
          >
            {i + 1} {value}
          </div>
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 1.3rem;
  font-family: 'Eoe_Zno_B';
`;
const Group = styled.div`
  font-family: 'NanumBarunGothic';
  letter-spacing: 2px;
  font-size: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 140px 140px;
  grid-template-rows: repeat(5, minmax(35px, auto));
  grid-auto-flow: column dense;
  column-gap: 20px;
  align-items: center;
  & .trend {
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    background: ${({ theme }) => theme.gradColor};
    /* opacity: 0.9; */
  }
  & .gu-div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export default StatusTrend;
