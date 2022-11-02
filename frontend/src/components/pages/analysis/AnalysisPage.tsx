import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AnalysisSideBar from '../../organisms/AnalysisSideBar';
import { areas, DongItem } from '../../../data/areaDong';
import Transitions from '../../atoms/Transition';

declare global {
  interface Window {
    kakao: any;
  }
}

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.59, 126.97), //지도의 중심좌표.
  level: 8, //지도의 레벨(확대, 축소 정도)
};

const polygonOption = (paths: any, isSelected: boolean) => ({
  path: paths.map((p: any, i: number) => new window.kakao.maps.LatLng(...p)), // 그려질 다각형의 좌표 배열입니다
  strokeWeight: isSelected ? 3 : 0, // 선의 두께입니다
  strokeColor: '#7579E7', // 선의 색깔입니다
  strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
  // strokeStyle: 'longdash', // 선의 스타일입니다
  fillColor: '#7579E7a0', // 채우기 색깔입니다
  fillOpacity: isSelected ? 0.6 : 0.01, // 채우기 불투명도 입니다
});

const mouseoverOption = {
  // fillColor: '#EFFFED', // 채우기 색깔입니다
  fillOpacity: 0.6, // 채우기 불투명도 입니다
  strokeWeight: 3,
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
const mouseoutOption = {
  fillOpacity: 0.01, // 채우기 불투명도 입니다
  strokeWeight: 0,
};

const getCenter = (path: Array<any>) => {
  let sum = [0, 0];
  path.map((e, i) => {
    sum[0] += e[0];
    sum[1] += e[1];
  });

  sum[0] /= path.length;
  sum[1] /= path.length;

  return sum;
};

const dongList = areas.map((area: DongItem, index) => area.name);

const AnalysisPage = () => {
  const [map, setMap] = useState<any>();
  const [keyword, setKeyword] = useState('');
  const [select, setSelect] = useState<number | null>(null);
  const [selectedDong, setSelectedDong] = useState('');

  const container = useRef<any>();

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();

  useEffect(() => {
    setMap(new window.kakao.maps.Map(container.current, options)); //지도 생성 및 객체 리턴
  }, []);

  useEffect(() => {
    console.log(select);
  }, [select]);

  useEffect(() => {
    if (map) {
      const polygons = areas.map((area: DongItem, index) => {
        const polygon = new window.kakao.maps.Polygon(
          polygonOption(area.path, index === select)
        );
        polygon.setMap(map);
        // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다

        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, 'mouseover', function () {
          // 다각형의 채우기 옵션을 변경합니다
          const level = map.getLevel();
          // if (level <= 6) {
          //   polygon.setOptions(mouseoverOption);
          // }
          if (select === null) {
            polygon.setOptions(mouseoverOption);
          }
        });

        window.kakao.maps.event.addListener(polygon, 'mouseout', function () {
          // 다각형의 채우기 옵션을 변경합니다
          if (select === null) {
            polygon.setOptions(mouseoutOption);
          }
        });

        // 다각형에 클릭 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, 'click', function () {
          if (select === null) {
            setSelect(index);
            setSelectedDong(area.name);
            map.setCenter(
              new window.kakao.maps.LatLng(...getCenter(area.path))
            );
            map.setLevel(5);
          }
        });
        return polygon;
      });

      return () => {
        polygons.map((polygon, idx) => polygon.setMap(null));
      };
    }
  }, [map, select]);

  useEffect(() => {});

  useEffect(() => {
    if (keyword) {
      console.log(dongList.filter((e, i) => e.includes(keyword)));
    }
  }, [keyword]);

  const onChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const clearValue = () => {
    setSelectedDong('');
    setSelect(null);
  };

  return (
    <Transitions>
      <Wrapper>
        <AnalysisSideBar
          map={map}
          onChange={onChange}
          inputValue={selectedDong}
          clearValue={clearValue}
        />
        <div
          className="map"
          style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
          }}
          ref={container}
        ></div>
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  & #daum-maps-shape-0 {
    fill-opacity: 1;
  }
  /* overflow-y: hidden; */
`;

export default AnalysisPage;
