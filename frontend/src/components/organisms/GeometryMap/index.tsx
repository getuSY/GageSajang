import React from 'react';
import styled from 'styled-components';
import { geoMercator, geoPath } from 'd3-geo';
import { Gu } from '../../../models/data';

type GeometryProps = {
  areas: Array<Gu>;
};

const GeometryMap = ({ areas }: GeometryProps) => {
  const mapData = areas;
  const width = 800;
  const height = 800;
  const projection = geoMercator()
    .center([127.023136826325427, 37.57196080977203])
    .scale(100000)
    .translate([width / 2 + 80, height / 2]);
  const pathGenerator = geoPath().projection(projection);

  const onClick = (d: any) => {
    // onClick 함수
    alert(`${d.properties.SIG_KOR_NM}`);
  };

  const countries = mapData.map((d: any, i) => (
    <path
      key={'path' + i}
      d={pathGenerator(d)!}
      className={`path-gu path-gu-${d.properties.SIG_ENG_NM}`}
      onClick={() => onClick(d)}
    />
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
  & .path-gu {
    fill: #d9d9d9;
    stroke: ${({ theme }) => theme.mainColor};
    cursor: pointer;
    &:hover {
      fill: ${({ theme }) => theme.mainColor};
    }
  }
`;

export default GeometryMap;
