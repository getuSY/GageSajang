import areaDong from './areaDong.json';

export interface DongItem {
  name: string;
  idx: number;
  path: Array<any>;
  admCd: string;
}

export const areas: Array<DongItem> = areaDong.features.map((area, i) => ({
  name: area.properties.adm_nm.replace('서울특별시 ', ''),
  idx: i,
  admCd: area.properties.adm_cd8,
  path: area.geometry.coordinates[0][0].map((point, i) => [point[1], point[0]]),
}));
