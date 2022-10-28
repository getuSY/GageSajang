import { map } from 'd3';
import React from 'react';
import styled from 'styled-components';

interface StatusTrendProps {}

const StatusTrend = ({}: StatusTrendProps) => {
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

  return (
    <Wrapper>
      <Title>👑 요즘 뜨는 상권 Top10</Title>
      <Group>
        {dummy.map((value, i) => (
          <span>
            {i + 1}.{value}
          </span>
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, minmax(50px, auto));
  grid-auto-flow: column dense;
  align-items: center;
`;

export default StatusTrend;
