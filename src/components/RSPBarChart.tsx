import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { MonthlyAverageRSP } from '../types/rsp';

interface RSPBarChartProps {
  data: MonthlyAverageRSP[];
}

export function RSPBarChart({ data }: RSPBarChartProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }

    const chart = chartInstanceRef.current;
    const months = data.map((item) => item.month);
    const rspValues = data.map((item) => item.averageRSP);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Monthly Average RSP',
        left: 'center',
        top: '5px',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const param = Array.isArray(params) ? params[0] : params;
          return `${param.name}<br/>Average RSP: ₹${param.value}`;
        },
      },
      grid: {
        left: '10%',
        right: '4%',
        bottom: '10%',
        top: '15%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLabel: {
          rotate: 0,
        },
        name: 'Months',
        nameLocation: 'middle',
        nameGap: 30,
      },
      yAxis: {
        type: 'value',
        name: 'Monthly Average RSP (₹)',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
          formatter: (value: number) => `₹${value}`
        },
      },
      series: [
        {
          name: 'Average RSP',
          type: 'bar',
          data: rspValues,
          itemStyle: {
            color: '#3398DB',
          },
          emphasis: {
            itemStyle: {
              color: '#1E88E5',
            },
          },
        },
      ],
    };

    chart.setOption(option);

    // fix resize issue
    setTimeout(() => {
      chart.resize();
    }, 0);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 0,
      }}
    />
  );
}

