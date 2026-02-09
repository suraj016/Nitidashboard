import { Select } from '@mantine/core';
import type { MetroCity, FuelType, CalendarYear, FilterState } from '../types/rsp';
import { getAvailableCities, getAvailableFuelTypes, getAvailableYears } from '../utils/dataProcessor';

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function Filters({ filters, onFiltersChange }: FiltersProps): JSX.Element {
  const cities = getAvailableCities();
  const fuelTypes = getAvailableFuelTypes();
  const years = getAvailableYears();

  const handleCityChange = (value: string | null) => {
    if (value) {
      onFiltersChange({
        ...filters,
        city: value as MetroCity,
      });
    }
  };

  const handleFuelTypeChange = (value: string | null) => {
    if (value) {
      onFiltersChange({
        ...filters,
        fuelType: value as FuelType,
      });
    }
  };

  const handleYearChange = (value: string | null) => {
    if (value) {
      onFiltersChange({
        ...filters,
        year: parseInt(value, 10) as CalendarYear,
      });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Select
        label="Metro City"
        placeholder="Select city"
        value={filters.city}
        onChange={handleCityChange}
        data={cities}
        style={{ flex: '1', minWidth: '180px' }}
      />
      <Select
        label="Fuel Type"
        placeholder="Select fuel type"
        value={filters.fuelType}
        onChange={handleFuelTypeChange}
        data={fuelTypes}
        style={{ flex: '1', minWidth: '180px' }}
      />
      <Select
        label="Calendar Year"
        placeholder="Select year"
        value={filters.year.toString()}
        onChange={handleYearChange}
        data={years.map((year) => year.toString())}
        style={{ flex: '1', minWidth: '180px' }}
      />
    </div>
  );
}

