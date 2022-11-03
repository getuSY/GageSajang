import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface StatusTrendProps {}

const StatusTrend = ({}: StatusTrendProps) => {
  const dummy_title = [
    '입점 많은 상권',
    '요즘 뜨는 업종',
    '폐점 많은 업종',
    '매출 높은 동네',
  ];
  const dummy = [
    [
      '강남 마이스 관광특구',
      '금천철쭉어린이공원(금하마을)',
      '가산디지털단지역 1번 출입구',
      'G타워',
      '신수시장',
      '홍대 걷고싶은 거리',
      '사당1동먹자골목상점가(사당1동먹자골목)',
      '신림중앙시장(조원동 펭귄시장)',
      '구립대학경로당(관악산샘말공원)',
      '신성초등학교',
    ],
    [
      '한식음식점',
      '육류판매',
      '커피-음료',
      '미용실',
      '일반교습학원',
      '호프-간이주점',
      '패스트푸드점',
      '컴퓨터및주변장치판매',
      '운동/경기용품',
      '인테리어',
    ],
    [
      'PC방',
      '컴퓨터및주변장치판매',
      '전자상거래업',
      '가전제품수리',
      '시계및귀금속',
      '신발',
      '네일숍',
      '핸드폰',
      '서적',
      '문구',
    ],
    [
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
    ],
  ];

  const [trend, setTrend] = useState(0);
  const [getNumber, setGetNumber] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!isHover) {
      const timer = setInterval(
        () => setTrend((trend) => (trend + 1) % 10),
        5000
      );
      return () => clearInterval(timer);
    }
  }, [isHover]);

  const onHoverHandler = (i: any) => {
    setIsHover(true);
    setTrend(i);
  };

  const onNotHoverHandler = () => {
    setIsHover(false);
  };

  const onClickLeftHandler = () => {
    setGetNumber((getNumber) => (getNumber + 3) % 4);
    setTrend(0);
  };

  const onClickRightHandler = () => {
    setGetNumber((getNumber) => (getNumber + 1) % 4);
    setTrend(0);
  };

  return (
    <Wrapper>
      <Title_div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="trend-icon"
          onClick={onClickLeftHandler}
        />
        <div className="title">{dummy_title[getNumber]} Top10</div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="trend-icon"
          onClick={onClickRightHandler}
        />
      </Title_div>
      <Group>
        {dummy[getNumber].map((value, i) => (
          <div
            className={trend === i ? `gu-div trend` : `gu-div`}
            key={`gu-${i}`}
            onMouseOver={() => onHoverHandler(i)}
            onMouseOut={() => onNotHoverHandler()}
          >
            <div className="rank">{i + 1}</div>
            <div className="content">{value}</div>
          </div>
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3vh;
  border: 1px solid darkgray;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Title_div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  margin-bottom: 1rem;

  & .title {
    font-size: 1.3rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }

  & .trend-icon {
    cursor: pointer;
    font-size: 1.3rem;
    color: darkgray;
    & :hover {
      color: black;
    }
  }
`;

const Group = styled.div`
  letter-spacing: 2px;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 140px 140px;
  grid-template-rows: repeat(5, minmax(40px, auto));
  grid-auto-flow: column dense;
  column-gap: 20px;
  align-items: center;
  padding-left: 20px;

  & :hover {
    cursor: pointer;
  }

  & .trend {
    border: 2px solid #0066ff;
    border-radius: 10px;

    & :hover {
      transform: translateX(calc(-100% + 105px));
      overflow-wrap: hidden;
      transition: 2s;
    }
  }

  & .gu-div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    /* padding-left: 10px; */
    white-space: nowrap;
    overflow: hidden;
  }

  & .rank {
    font-weight: 700;
    color: red;
    margin-right: 0.3vw;
    background: #fff;
    z-index: 100;
    padding-left: 10px;
    padding-right: 2px;
  }
`;

export default StatusTrend;
