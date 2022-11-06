import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AnalysisSideBar from '../../organisms/AnalysisSideBar';
import { areas, DongItem } from '../../../data/areaDong';
import Transitions from '../../atoms/Transition';
import KakaoMap from '../../organisms/KakaoMap';

const mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.5666805, 126.9784147), //지도의 중심좌표.
  level: 7, //지도의 레벨(확대, 축소 정도)
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
  fillOpacity: 0.6, // 채우기 불투명도 입니다
  strokeWeight: 3,
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
const mouseoutOption = {
  fillOpacity: 0.01, // 채우기 불투명도 입니다
  strokeWeight: 0,
};

const dongList = areas.map((area: DongItem, index) => area.name);

const AnalysisPage = () => {
  const [map, setMap] = useState<any>(); // map 객체
  const [keyword, setKeyword] = useState(''); // 검색 input
  const [select, setSelect] = useState<number | null>(null); // 현재 선택한 동 index
  const [selectedDong, setSelectedDong] = useState(''); // 현재 선택한 동 이름
  const [searchResult, setSearchResult] = useState<Array<string>>([]);
  const [searchResultOpen, setSearchResultOpen] = useState<boolean>(false);
  const searchResultRef = useRef<any>();

  const container = useRef<any>();

  // 주소-좌표 변환 객체를 생성합니다
  // const geocoder = new kakao.maps.services.Geocoder();

  useEffect(() => {
    // 동 검색
    if (keyword) {
      const tmp = dongList.filter((e, i) => e.includes(keyword));
      setSearchResult(tmp);
      if (tmp.length > 0) {
        setSearchResultOpen(true);
      }
      console.log(tmp);
    }
  }, [keyword]);

  const onChange = (e: any) => {
    // 동 검색 onChange
    setKeyword(e.target.value);
  };

  const clearValue = () => {
    // 동 검색 x 버튼
    setSelectedDong('');
    setSelect(null);
  };

  return (
    <Transitions>
      <Wrapper
        onClick={(e) => {
          if (!searchResultRef.current.contains(e.target)) {
            setSearchResultOpen(false);
          }
        }}
      >
        <AnalysisSideBar
          onChange={onChange}
          inputValue={selectedDong}
          clearValue={clearValue}
          searchResult={searchResult}
          searchResultOpen={searchResultOpen}
          setSearchResultOpen={setSearchResultOpen}
          setSelectedDong={setSelectedDong}
          searchResultRef={searchResultRef}
        />
        <KakaoMap
          map={map}
          setMap={setMap}
          mapOptions={mapOptions}
          mouseoverOption={mouseoverOption}
          mouseoutOption={mouseoutOption}
          polygonOption={polygonOption}
          mapRef={container}
          select={select}
          setSelect={setSelect}
          setSelectedDong={setSelectedDong}
        />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 80px);
`;

export default AnalysisPage;
