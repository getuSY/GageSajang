export interface ProfessionalResultParams {
  email: string | null;
  sales: number;
  clerk: number;
  area: number;
  dongName: string;
  industryName: string;
}

export interface ProfessionalSimulationParams {
  dongName: string;
  industryName: string;
  quarter: number;
  value: number;
  year: number;
}
