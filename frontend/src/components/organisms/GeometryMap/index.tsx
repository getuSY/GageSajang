import React from 'react';
import styled from 'styled-components';
import { geoMercator, geoPath } from 'd3-geo';
import { Gu } from '../../../models/data';
import { text } from 'd3';
import { any } from 'prop-types';

type GeometryProps = {
  areas: Array<Gu>;
};

const GeometryMap = ({ areas }: GeometryProps) => {
  const mapData = areas;
  const width = 1100;
  const height = 860;
  const scale = 130000;
  const projection = geoMercator()
    .center([127.023136826325427, 37.57196080977203])
    .scale(scale)
    .translate([width / 2 + 80, height / 2]);
  const pathGenerator = geoPath().projection(projection);

  const onClick = (d: any) => {
    // onClick 함수
    alert(`${d.properties.SIG_KOR_NM}`);
  };

  const countries = mapData.map((d: any, i) => (
    <>
      <path
        key={'path' + i}
        d={pathGenerator(d)!}
        className={`path-gu-1 path-gu-${d.properties.SIG_ENG_NM}`}
        onClick={() => onClick(d)}
      />
      <text
        key={`path${i}text`}
        transform={`translate(${pathGenerator.centroid(d)})`}
        style={{ textAnchor: 'middle', top: '10px' }}
        y={d.properties.y_offset ? d.properties.y_offset : ''}
        x={d.properties.x_offset ? d.properties.x_offset : ''}
      >
        {d.properties.SIG_KOR_NM}
      </text>
    </>
  ));

  return (
    <Wrapper>
      <svg width={width} height={height}>
        {countries}
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .path-gu-1 {
    fill: #d9d9d9; // 채우는 색
    stroke: ${({ theme }) => theme.mainColor}; // 테두리 색
    cursor: pointer;
    &:hover {
      fill: ${({ theme }) => theme.mainColor};
    }
  }
`;

export default GeometryMap;
