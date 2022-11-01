import React from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';

declare global {
  interface Window {
    kakao: any;
  }
}

interface PostcodeProps {
  map: any;
}

const Postcode = ({ map }: PostcodeProps) => {
  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    var geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${data.address}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <button type="button" onClick={handleClick}>
      Open
    </button>
  );
};

export default Postcode;
