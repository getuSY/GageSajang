import areaDong from './areaDong.json';

export interface DongItem {
  name: string;
  isMouseover: boolean;
  path: Array<any>;
}

export const areas: Array<DongItem> = areaDong.features.map((area, i) => ({
  name: area.properties.adm_nm,
  isMouseover: false,
  path: area.geometry.coordinates[0][0].map((point, i) =>
    // new window.kakao.maps.LatLng(point[1], point[0])
    ({ lat: point[1], lng: point[0] })
  ),
}));
