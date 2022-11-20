export interface ProfessionalResultParams {
  email: string | null;
  sales: number;
  clerk: number;
  area: number;
  dongName: string | undefined;
  industryName: string | undefined;
}

export interface ProfessionalStoreInfo extends ProfessionalResultParams {
  id: number;
}

export interface ProfessionalSimulationParams {
  dongName: string | undefined;
  industryName: string | undefined;
  quarter: number;
  value: number;
  year: number;
}

export interface ProfessionalStoreResult {
  store: {
    total: number;
    clerk: number;
    area: number;
    similar: number;
    franchise: number;
  };
  sales: {
    order: number;
    sales: number;
  };
  status: {
    open: number;
    close: number;
  };
}
