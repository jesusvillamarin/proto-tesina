export interface TaxInfo {
  receipt?: number;
  date?: Date;
  year: string;
  tax: number;
  surcharge: number;
  penalty: number;
  subsidy: number;
  total: number;
  payOut: boolean;
}
