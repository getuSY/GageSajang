import React from 'react';
import styled from 'styled-components';
import { geoMercator, geoPath } from 'd3-geo';
import { Gu } from '../../../models/data';
import { useNavigate, useSearchParams } from 'react-router-dom';

type GeometryProps = {
  areas: Array<Gu>;
  isOpen: boolean;
  onClickRegionHandler: any;
  tab: number;
  data: any;
};

const GeometryMap = ({
  areas,
  isOpen,
  onClickRegionHandler,
  tab,
  data,
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
    ['#E7E0F9', '#D3C0F7', '#A78DED', '#8C63E5', '#5E28C9'],
    ['#D8EEFF', '#A4D7FC', '#60AEEE', '#0095E5', '#007ECE'],
    ['#F3FFDA', '#FAF0C3', '#F8DB6D', '#F8D426', '#EDC900'],
    ['#D6FFFD', '#BBFBF7', '#68E1D9', '#10C1CC', '#009FA9'],
    ['#C3FFEA', '#92ECCD', '#5DD0A7', '#00BF7A', '#009E65'],
    ['#FDEAEC', '#FFCCD1', '#F3A6AF', '#E97F8D', '#CC4E5D'],
  ];

  const onClick = (d: any) => {
    onClickRegionHandler(d.properties.SIG_KOR_NM);
  };

  const countries = mapData.map((d: any, i) => (
    <path
      key={'path' + i}
      d={pathGenerator(d)!}
      onClick={() => onClick(d)}
      className="path-gu"
      style={{
        fill: mapColor[tab][
          data[tab].data.find(
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
      style={{ textAnchor: 'middle', top: '10px' }}
      x={d.properties.x_offset ? d.properties.x_offset : ''}
      y={d.properties.y_offset ? d.properties.y_offset : ''}
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

  & .path-gu {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export default GeometryMap;
