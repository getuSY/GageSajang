import React, { useEffect } from 'react';
import { areas, DongItem } from '../../../data/areaDong';

interface KakaoMapProps {
  map: any;
  setMap: React.Dispatch<any>;
  mapOptions?: object;
  mouseoverOption?: object;
  mouseoutOption?: object;
  polygonOption: any;
  mapRef: React.MutableRefObject<any>;
  select: any;
  setSelect: any;
  setSelectedDong?: any;
  // select?: number | null;
}

const getCenter = (path: Array<any>) => {
  let sum = [0, 0];
  path.forEach((e, i) => {
    sum[0] += e[0];
    sum[1] += e[1];
  });

  sum[0] /= path.length;
  sum[1] /= path.length;
  sum[1] -= 0.01;

  return sum;
};

const KakaoMap = ({
  map,
  setMap,
  mouseoverOption,
  mouseoutOption,
  polygonOption,
  mapRef,
  mapOptions,
  select,
  setSelect,
  setSelectedDong,
}: // select,
KakaoMapProps) => {
  useEffect(() => {
    setMap(new window.kakao.maps.Map(mapRef.current, mapOptions)); //지도 생성 및 객체 리턴
  }, [mapRef, mapOptions, setMap]);

  useEffect(() => {
    if (map) {
      const polygons = areas.map((area: DongItem, index) => {
        const polygon = new window.kakao.maps.Polygon(
          polygonOption(area.path, index === select)
        );
        polygon.setMap(map);
        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, 'mouseover', function () {
          // 다각형의 채우기 옵션을 변경합니다
          // const level = map.getLevel();

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
  }, [
    map,
    select,
    mouseoutOption,
    mouseoverOption,
    polygonOption,
    setSelect,
    setSelectedDong,
  ]);

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
    ></div>
  );
};

export default KakaoMap;
