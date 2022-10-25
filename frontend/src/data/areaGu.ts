import Gu from './areaGu.json';

interface dataItem {
  SIG_CD: string;
  SIG_ENG_NM: string;
  SIG_KOR_NM: string;
  path: Array<any>;
}

export const areas = Gu.features.map((area, i) => ({
  SIG_CD: area.properties.SIG_CD,
  SIG_ENG_NM: area.properties.SIG_ENG_NM,
  name: area.properties.SIG_KOR_NM,
  path: area.geometry.coordinates[0].map(
    (point, i) => new window.kakao.maps.LatLng(point[0], point[1])
  ),
  // path: area.geometry.coordinates[0],
}));

console.log(areas);
