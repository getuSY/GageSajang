import areaDong from './areaDong.json';

export interface DongItem {
  name: string;
  path: Array<any>;
}

export const areas: Array<DongItem> = areaDong.features.map((area, i) => ({
  name: area.properties.adm_nm.replace('서울특별시 ', ''),
  path: area.geometry.coordinates[0][0].map((point, i) => [point[1], point[0]]),
}));
