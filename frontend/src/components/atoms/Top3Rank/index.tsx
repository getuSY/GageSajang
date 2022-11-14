import React from 'react';
import styled from 'styled-components';

interface Top3RankProps {
  top3: string[];
}

const Top3Rank = ({ top3 }: Top3RankProps) => {
  return (
    <Wrapper>
      <div className="top top3">
        3<div className="top-item">{top3[2]}</div>
      </div>
      <div className="top top1">
        1<div className="top-item">{top3[0]}</div>
      </div>
      <div className="top top2">
        2<div className="top-item">{top3[1]}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  & .top {
    width: 100px;
    background: #b6acf1;
    position: relative;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }
  & .top1 {
    height: 170px;
  }
  & .top2 {
    height: 115px;
  }
  & .top3 {
    height: 80px;
  }
  & .top-item {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    transform: translateY(calc(-100% - 14px));
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export default Top3Rank;
