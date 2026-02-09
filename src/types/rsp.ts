export type MetroCity = 
  | 'Delhi'
  | 'Mumbai'
  | 'Kolkata'
  | 'Chennai'
  | 'Bangalore'
  | 'Hyderabad';

export type FuelType = 'Petrol' | 'Diesel';

export type Month = 
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type CalendarYear = 2020 | 2021 | 2022 | 2023 | 2024;

export interface RSPDataEntry {
  city: MetroCity;
  fuelType: FuelType;
  year: CalendarYear;
  month: Month;
  rsp: number;
}

export interface MonthlyAverageRSP {
  month: Month;
  averageRSP: number;
}

export interface FilterState {
  city: MetroCity;
  fuelType: FuelType;
  year: CalendarYear;
}

