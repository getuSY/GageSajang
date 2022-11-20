import React from 'react';
import styled from 'styled-components';

interface Top3RankProps {
  top3: string[];
  style?: object;
  style1?: object;
  style2?: object;
  style3?: object;
}

const Top3Rank = ({ top3, style, style1, style2, style3 }: Top3RankProps) => {
  return (
    <Wrapper style={style}>
      <div className="top top3" style={style3}>
        3<div className="top-item">{top3[2]}</div>
      </div>
      <div className="top top1" style={style1}>
        1<div className="top-item">{top3[0]}</div>
      </div>
      <div className="top top2" style={style2}>
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
    width: 120px;
    background: #b6acf1;
    position: relative;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }
  & .top1 {
    height: 210px;
  }
  & .top2 {
    height: 145px;
  }
  & .top3 {
    height: 100px;
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
