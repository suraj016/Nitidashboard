import type { RSPDataEntry, MonthlyAverageRSP, FilterState, Month } from '../types/rsp';
import { rspData } from '../data/rspData';

const monthOrder: Month[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function getMonthlyAverageRSP(filters: FilterState): MonthlyAverageRSP[] {
  const filteredData = rspData.filter(
    (entry) =>
      entry.city === filters.city &&
      entry.fuelType === filters.fuelType &&
      entry.year === filters.year
  );

  const monthMap = new Map<Month, number[]>();

  monthOrder.forEach((month) => {
    monthMap.set(month, []);
  });

  filteredData.forEach((entry) => {
    const month = entry.month;
    const rsp = entry.rsp || 0; // missing values = 0
    const existingValues = monthMap.get(month) || [];
    monthMap.set(month, [...existingValues, rsp]);
  });

  const monthlyAverages: MonthlyAverageRSP[] = monthOrder.map((month) => {
    const values = monthMap.get(month) || [];
    const averageRSP = values.length > 0
      ? values.reduce((sum, val) => sum + val, 0) / values.length
      : 0;

    return {
      month,
      averageRSP: Math.round(averageRSP * 100) / 100,
    };
  });

  return monthlyAverages;
}

export function getAvailableCities(): string[] {
  const cities = new Set<string>();
  rspData.forEach((entry) => {
    cities.add(entry.city);
  });
  return Array.from(cities).sort();
}

export function getAvailableFuelTypes(): string[] {
  const fuelTypes = new Set<string>();
  rspData.forEach((entry) => {
    fuelTypes.add(entry.fuelType);
  });
  return Array.from(fuelTypes).sort();
}

export function getAvailableYears(): number[] {
  const years = new Set<number>();
  rspData.forEach((entry) => {
    years.add(entry.year);
  });
  return Array.from(years).sort((a, b) => a - b);
}

