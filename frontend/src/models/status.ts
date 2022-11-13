// 상권현황 지도

// 상권현황 상세 지도
export interface FloatingPopulationMap {
  guName: string;
  living: number;
  level: number;
}

export interface ResidentPopulationMap {
  guName: string;
  resident: number;
  level: number;
}

export interface NumberOfStoresMap {
  guName: string;
  store: number;
  level: number;
}

export interface OpeningRateMap {
  guName: string;
  open: number;
  level: number;
}

export interface ClosureRateMap {
  guName: string;
  close: number;
  level: number;
}

export interface SalesMap {
  guName: string;
  sales: number;
  level: number;
}

// const aaa: Array<SalesMap>

// // 상권현황 상세 조회 전체 목록
// export interface StatusDetail {
//   living: FloatingPopulationMap;
//   residnet: ResidentPopulationMap;
//   store: NumberOfStoresMap;
//   open: OpeningRateMap;
//   close: ClosureRateMap;
//   change: string;
//   sales: SalesMap;
// }
