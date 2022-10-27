import { Polygon } from 'geojson';

interface Property {
  SIG_CD: string;
  SIG_ENG_NM: string;
  SIG_KOR_NM: string;
  orig_ogc_fid: number;
}

export interface Gu {
  type: string;
  properties: Property;
  geometry: any;
}
