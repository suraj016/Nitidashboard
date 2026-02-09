import { useState } from 'react';
import { MantineProvider, Container, Title, Paper } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import { Filters } from './components/Filters';
import { RSPBarChart } from './components/RSPBarChart';
import { getMonthlyAverageRSP } from './utils/dataProcessor';
import type { FilterState } from './types/rsp';

const defaultFilters: FilterState = {
  city: 'Delhi',
  fuelType: 'Petrol',
  year: 2020,
};

function App(): JSX.Element {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const monthlyData = getMonthlyAverageRSP(filters);

  return (
    <MantineProvider>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '16px',
          boxSizing: 'border-box',
        }}
      >
        <Container
          size="xl"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            height: '100%',
            maxWidth: '100%',
          }}
        >
          <Title
            order={1}
            style={{
              marginBottom: '16px',
              textAlign: 'center',
              fontSize: 'clamp(20px, 4vw, 28px)',
              flexShrink: 0,
            }}
          >
            RSP Dashboard - Petrol & Diesel Prices
          </Title>

          <Paper
            shadow="sm"
            p="md"
            style={{
              marginBottom: '16px',
              flexShrink: 0,
            }}
          >
            <Filters filters={filters} onFiltersChange={setFilters} />
          </Paper>

          <Paper
            shadow="sm"
            p="md"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            <RSPBarChart data={monthlyData} />
          </Paper>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;

