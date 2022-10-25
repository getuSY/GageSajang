import React, { useEffect } from 'react';
import styled from 'styled-components';
import { areas } from '../../../data/areaGu';

declare global {
  interface Window {
    kakao: any;
  }
}

// const trans_coordinates = (arr: Array<any>) => {
//   arr = arr.map((point, i) => new window.kakao.maps.LatLng(point[0], point[1]));
//   console.log(arr);
//   return arr;
// };

const StatusPage = () => {
  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.541, 126.986), //지도의 중심좌표.
      // draggable: false,
      level: 8, //지도의 레벨(확대, 축소 정도)
    };

    console.log(areas);

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    let customOverlay = new window.kakao.maps.CustomOverlay({});
    let infowindow = new window.kakao.maps.InfoWindow({ removable: true });
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    // let zoomControl = new window.kakao.maps.ZoomControl();
    // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    const displayArea = (area: any) => {
      // 다각형을 생성합니다
      let polygon = new window.kakao.maps.Polygon({
        map: map, // 다각형을 표시할 지도 객체
        path: area.path,
        // path: trans_coordinates(area.path),
        strokeWeight: 2,
        strokeColor: '#004c80',
        strokeOpacity: 0.8,
        fillColor: '#fff',
        fillOpacity: 0.7,
      });

      console.log(polygon.path);

      // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
      // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
      window.kakao.maps.event.addListener(
        polygon,
        'mouseover',
        function (mouseEvent: any) {
          polygon.setOptions({ fillColor: '#09f' });

          customOverlay.setContent('<div class="area">' + area.name + '</div>');

          customOverlay.setPosition(mouseEvent.latLng);
          customOverlay.setMap(map);
        }
      );

      // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
      window.kakao.maps.event.addListener(
        polygon,
        'mousemove',
        function (mouseEvent: any) {
          customOverlay.setPosition(mouseEvent.latLng);
        }
      );

      // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
      // 커스텀 오버레이를 지도에서 제거합니다
      window.kakao.maps.event.addListener(polygon, 'mouseout', function () {
        polygon.setOptions({ fillColor: '#fff' });
        customOverlay.setMap(null);
      });

      // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
      window.kakao.maps.event.addListener(
        polygon,
        'click',
        function (mouseEvent: any) {
          let content =
            '<div class="info">' +
            '   <div class="title">' +
            area.name +
            '</div>' +
            '   <div class="size">총 면적 : 약 ' +
            Math.floor(polygon.getArea()) +
            ' m<sup>2</sup></div>' +
            '</div>';

          infowindow.setContent(content);
          infowindow.setPosition(mouseEvent.latLng);
          infowindow.setMap(map);
        }
      );
    };

    for (let i = 0, len = areas.length; i < len; i++) {
      displayArea(areas[i]);
      console.log(areas[i]);
    }
  });
  return (
    <Wrapper>
      {/* <AnalysisSideBar /> */}
      <div
        id="map"
        style={{
          width: '100vw',
          height: 'calc(100vh - 80px)',
          background: '#595959',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default StatusPage;
