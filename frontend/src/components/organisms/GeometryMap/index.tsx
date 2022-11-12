import React from 'react';
import styled from 'styled-components';
import { geoMercator, geoPath } from 'd3-geo';
import { Gu } from '../../../models/data';
import { useNavigate, useSearchParams } from 'react-router-dom';

type GeometryProps = {
  areas: Array<Gu>;
  isOpen: boolean;
  onClickRegionHandler: any;
};

const GeometryMap = ({
  areas,
  isOpen,
  onClickRegionHandler,
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

  const onClick = (d: any) => {
    onClickRegionHandler(d.properties.SIG_KOR_NM);
  };

  const countries = mapData.map((d: any, i) => (
    <path
      key={'path' + i}
      d={pathGenerator(d)!}
      className={`path-gu-1 path-gu-${d.properties.SIG_ENG_NM} color-${i % 6}`}
      onClick={() => onClick(d)}
    />
  ));
  const countryTexts = mapData.map((d: any, i) => (
    <text
      key={`path${i}text`}
      transform={`translate(${pathGenerator.centroid(d)})`}
      style={{ textAnchor: 'middle', top: '10px' }}
      y={d.properties.y_offset ? d.properties.y_offset : ''}
      x={d.properties.x_offset ? d.properties.x_offset : ''}
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
    </Wrapper>
  );
};

interface WrapperInterface {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperInterface>`
  margin-left: ${({ isOpen }) => (isOpen ? '30vw' : '')};
  transition: margin-left 0.6s;
  & .path-gu-1 {
    fill: #d9d9d9; // 채우는 색
    stroke: darkgray;
    stroke-width: 1px;
    cursor: pointer;
    &:hover {
      fill: ${({ theme }) => theme.mainColor};
    }
  }

  & .color-0 {
    fill: rgb(226, 23, 149);
  }

  & .color-1 {
    fill: rgb(243, 132, 198);
  }

  & .color-2 {
    fill: rgb(239, 99, 182);
  }

  & .color-3 {
    fill: rgb(255, 223, 238);
  }

  & .color-4 {
    fill: rgb(250, 195, 226);
  }

  & .color-5 {
    fill: rgb(232, 67, 169);
  }
`;

export default GeometryMap;
