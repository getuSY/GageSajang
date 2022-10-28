import React, { useState } from 'react';
import styled from 'styled-components';
import AnalysisSideBar from '../../organisms/AnalysisSideBar';
import { areas as dongAreas, DongItem } from '../../../data/areaDong';
import { Map, Polygon } from 'react-kakao-maps-sdk';
declare global {
  interface Window {
    kakao: any;
  }
}

const AnalysisPage = () => {
  const [areas, setAreas] = useState<Array<DongItem>>([...dongAreas]);
  const [isMouseOver, setIsMouseOver] = useState(
    Array.from({ length: dongAreas.length }, () => false)
  );

  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });
  return (
    <Wrapper>
      <AnalysisSideBar />
      <Map
        center={{
          // 지도의 중심좌표
          lat: 37.59,
          lng: 126.97,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
        }}
        level={9} // 지도의 확대 레벨
        onMouseMove={(_map, mouseEvent) =>
          setMousePosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        {areas.map((area: DongItem, index) => (
          <Polygon
            path={area.path}
            strokeWeight={1}
            strokeColor={'#001215'}
            strokeOpacity={isMouseOver[index] ? 0 : 0}
            fillColor={'#7579E7a0'}
            fillOpacity={isMouseOver[index] ? 0.7 : 0.001}
            key={`area-${area.name}`}
            onMouseover={() =>
              setIsMouseOver((prev) => [...prev.map((_, i) => i === index)])
            }
            onMouseout={() =>
              setIsMouseOver((prev) => {
                const current = [...prev];
                current[index] = false;
                return current;
              })
            }
            onClick={() => {
              alert(`${area.name}`);
            }}
          />
        ))}
      </Map>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  /* overflow-y: hidden; */
`;

export default AnalysisPage;
