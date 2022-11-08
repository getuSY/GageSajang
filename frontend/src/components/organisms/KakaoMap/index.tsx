import React, { useEffect } from 'react';
import { areas, DongItem } from '../../../data/areaDong';

const mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.5666805, 126.9784147), //지도의 중심좌표.
  level: 7, //지도의 레벨(확대, 축소 정도)
};

const polygonOption = (paths: any, isSelected: boolean) => ({
  path: paths.map(
    (p: any, i: number) => new window.kakao.maps.LatLng(p[0], p[1])
  ), // 그려질 다각형의 좌표 배열입니다
  strokeWeight: isSelected ? 3 : 0, // 선의 두께입니다
  strokeColor: '#A155B9', // 선의 색깔입니다
  strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
  fillColor: '#DFB2ED', // 채우기 색깔입니다
  fillOpacity: isSelected ? 0.6 : 0.01, // 채우기 불투명도 입니다
});

const mouseoverOption = {
  fillOpacity: 0.6, // 채우기 불투명도 입니다
  strokeWeight: 3,
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
const mouseoutOption = {
  fillOpacity: 0.01, // 채우기 불투명도 입니다
  strokeWeight: 0,
};

interface KakaoMapProps {
  map: any;
  setMap: React.Dispatch<any>;
  mapRef: React.MutableRefObject<any>;
  select: any;
  selectDong: any;
}

const KakaoMap = ({
  map,
  setMap,
  mapRef,
  select,
  selectDong, // 다각형 클릭 이벤트
}: // select,
KakaoMapProps) => {
  useEffect(() => {
    setMap(new window.kakao.maps.Map(mapRef.current, mapOptions)); //지도 생성 및 객체 리턴
  }, [mapRef, setMap]);

  useEffect(() => {
    if (map) {
      const polygons = areas.map((area: DongItem, index) => {
        const polygon = new window.kakao.maps.Polygon(
          polygonOption(area.path, index === select?.idx)
        );
        polygon.setMap(map);
        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, 'mouseover', function () {
          // 다각형의 채우기 옵션을 변경합니다

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
            selectDong(area);
          }
        });
        return polygon;
      });

      return () => {
        polygons.map((polygon, idx) => polygon.setMap(null));
      };
    }
  }, [map, select, selectDong]);

  return (
    <div
      className="map"
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
      }}
      ref={mapRef}
    />
  );
};

export default KakaoMap;
