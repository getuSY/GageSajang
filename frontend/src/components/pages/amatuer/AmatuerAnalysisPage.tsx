import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import AnalysisSideBar from '../../organisms/AnalysisSideBar';
import { areas, DongItem } from '../../../data/areaDong';
import Transitions from '../../atoms/Transition';
import KakaoMap from '../../organisms/KakaoMap';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import getCenter from '../../../utils/getCenter';

const AmatuerAnalysisPage = () => {
  const [map, setMap] = useState<any>(); // map 객체
  const [keyword, setKeyword] = useState(''); // 검색 input
  const [select, setSelect] = useState<DongItem | null>(null); // 현재 선택한 동 index
  const [searchResult, setSearchResult] = useState<Array<DongItem>>([]);
  const [searchResultOpen, setSearchResultOpen] = useState<boolean>(false);
  const searchResultRef = useRef<any>();
  const container = useRef<any>();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const mainCategory = params.get('mainCategory')
    ? parseInt(params.get('mainCategory')!)
    : 0;
  const subCategory = params.get('subCategory')
    ? parseInt(params.get('subCategory')!)
    : 0;

  // 동 검색
  useEffect(() => {
    if (keyword) {
      const tmp = areas.filter((e: DongItem, i) => e.name.includes(keyword));
      setSearchResult(tmp);
      if (tmp.length > 0) {
        setSearchResultOpen(true);
      }
    }
  }, [keyword]);

  // 동 검색 onChange
  const onChange = useCallback((e: any) => {
    setKeyword(e.target.value);
  }, []);

  // 동 검색 x 버튼
  const clearValue = useCallback(() => {
    setSelect(null);
  }, []);

  const onClickAnlzButton = () => {
    navigate(
      `/amatuer/result?admCd=${select?.admCd}&mainCategory=${mainCategory}&subCategory=${subCategory}`
    );
  };

  const selectDong = useCallback(
    (area: DongItem) => {
      setSelect(area);
      setSearchResultOpen(false);
      const center = getCenter(area.path);
      map.setCenter(new window.kakao.maps.LatLng(center[0], center[1]));
      map.setLevel(5);
    },
    [map]
  );

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
          inputValue={select?.name}
          clearValue={clearValue}
          searchResult={searchResult}
          searchResultOpen={searchResultOpen}
          selectDong={selectDong}
          searchResultRef={searchResultRef}
          mainCategory={mainCategory}
          subCategory={subCategory}
          onClickAnlzButton={onClickAnlzButton}
        />
        <KakaoMap
          map={map}
          setMap={setMap}
          mapRef={container}
          select={select}
          selectDong={selectDong}
        />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 80px);
`;

export default AmatuerAnalysisPage;
