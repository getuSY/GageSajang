import React from 'react';
import styled from 'styled-components';
import { geoMercator, geoPath } from 'd3-geo';
import { Gu } from '../../../models/data';

type GeometryProps = {
  areas: Array<Gu>;
  isOpen: boolean;
  onClickRegionHandler: any;
  tab: number;
  guData: any;
  hinGuData: any;
  category: any;
};

const GeometryMap = ({
  areas,
  isOpen,
  onClickRegionHandler,
  tab,
  guData,
  hinGuData,
  category,
}: GeometryProps) => {
  const mapData = areas;
  const width = 1000;
  const height = 850;
  const scale = 130000;
  const projection = geoMercator()
    .center([127.023136826325427, 37.57196080977203])
    .scale(scale)
    .translate([width / 2 + 80, height / 2]);

  const pathGenerator = geoPath().projection(projection);

  const mapColor = [
    ['#E7E0F9', '#D3C0F7', '#A78DED', '#8C63E5', '#5E28C9'], // 유동인구
    ['#D8EEFF', '#A4D7FC', '#60AEEE', '#0095E5', '#007ECE'], // 거주인구
    ['#F3FFDA', '#FAF0C3', '#F8DB6D', '#FFDE3C', '#E8C500'], // 점포 수
    ['#D6FFFD', '#BBFBF7', '#68E1D9', '#10C1CC', '#009FA9'], // 개업률
    ['#C3FFEA', '#92ECCD', '#5DD0A7', '#00BF7A', '#009E65'], // 폐업률
    ['#FDEAEC', '#FFCCD1', '#F3A6AF', '#E97F8D', '#CC4E5D'],
  ];

  const unitContent = [
    ['40만 미만', '50만 미만', '60만 미만', '70만 미만', '70만 이상'], // 유동인구
    ['10만 미만', '15만 미만', '20만 미만', '25만 미만', '25만 이상'], // 거주인구
    ['1만 미만', '1.5만 미만', '2만 미만', '4만 미만', '4만 이상'], // 점포 수
    ['7% 미만', '9% 미만', '11% 미만', '13% 미만', '13% 이상'], // 개업률
    ['9% 미만', '10% 미만', '11% 미만', '12% 미만', '12% 이상'], // 폐업률
    ['1천만 미만', '1.3천만 미만', '1.8천만 미만', '2천만 미만', '2천만 이상'],
  ]; // 매출

  const unit = ['명', '명', '개소', '%', '%', '원'];

  const onClick = (d: any) => {
    onClickRegionHandler(d.properties.SIG_KOR_NM);
  };

  const data = [guData, hinGuData];
  const countries = mapData.map((d: any, i) => (
    <path
      key={'path' + i}
      d={pathGenerator(d)!}
      onClick={() => onClick(d)}
      className="path-gu"
      style={{
        fill: mapColor[tab][
          data[category === 'main' ? 0 : 1][tab].data.find(
            (guItem: any) => guItem.guName === d.properties.SIG_KOR_NM
          ).level - 1
        ],
        stroke: 'white',
        strokeWidth: '1px',
      }}
    />
  ));
  const countryTexts = mapData.map((d: any, i) => (
    <text
      key={`path${i}text`}
      transform={`translate(${pathGenerator.centroid(d)})`}
      style={{ textAnchor: 'middle', top: '10px', position: 'relative' }}
      x={d.properties.x_offset ? d.properties.x_offset : ''}
      y={d.properties.y_offset ? d.properties.y_offset : ''}
      onClick={() => onClick(d)}
      className="label-gu"
    >
      {d.properties.SIG_KOR_NM}
    </text>
  ));

  return (
    <Wrapper isOpen={isOpen}>
      <svg width={width} height={height}>
        {countries}
        {countryTexts}
      </svg>
      <LegendDiv style={{ border: `3px solid ${mapColor[tab][3]}` }}>
        <div className="legend-content-div">
          {mapColor[tab].map((color, i) => (
            <div className="legend-unit-line" key={`legend-unit-line-${i + 1}`}>
              <div
                className="legend-square"
                style={{ backgroundColor: color }}
              />
              <div className="legend-content">{unitContent[tab][i]}</div>
            </div>
          ))}
        </div>
        <div className="legend-unit">단위 : {unit[tab]}</div>
      </LegendDiv>
    </Wrapper>
  );
};

interface WrapperInterface {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperInterface>`
  margin-left: ${({ isOpen }) => (isOpen ? '30vw' : '')};
  transition: margin-left 0.6s;

  & .path-gu {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  & .label-gu {
    cursor: pointer;
  }
`;

const LegendDiv = styled.div`
  position: absolute;
  height: 10rem;
  width: 9rem;
  bottom: 1rem;
  right: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;

  & .legend-content-div {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }

  & .legend-unit-line {
    display: flex;
    margin-bottom: 3px;
  }

  & .legend-square {
    width: 1.5rem;
    height: 1rem;
    background-color: white;
    border: 1px solid black;
  }

  & .legend-content {
    width: 6rem;
    text-align: start;
    margin-left: 10px;
  }

  & .legend-unit {
    margin-top: 1rem;
    /* margin-left: 3px; */
    text-align: end;
    margin-right: 5px;
  }
`;

export default GeometryMap;
