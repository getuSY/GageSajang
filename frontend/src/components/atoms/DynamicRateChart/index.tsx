import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions, Chart } from 'chart.js';
import ReportChart, { ReportChartProps } from '../ReportChart';

interface DynamicRateChartProps {
  posi: number;
  values?: Array<number>;
  labels?: Array<string>;
}

type Position = { x: string; y: number };

const DynamicRateChart = ({ posi, values, labels }: DynamicRateChartProps) => {
  // const [realData, setRealData] = useState([{ x: '2013년 1분기', y: 0 }]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: '연매출액',
        data: values,
        backgroundColor: '#eeeeee',
        // borderColor: 'rgba(73, 208, 168, 0.5)',
        // borderWidth: 5,
        tension: 0.3,
        fill: true,
        opacity: 0.5,
      },
    ],
  };

  const options = {
    reponsive: false,
    resizeDelay: 0,
    elements: { point: { pointStyle: 'circle', radius: 5 } },
    plugins: {
      datalabels: { display: false },
      title: {
        display: true,
        text: '매출액 증감 추이',
      },
      legend: {
        display: true,
        labels: {
          color: 'black',
        },
      },
    },
    scales: {
      x: {
        // type: 'linear',
        axis: 'x',
        // min: 2013,
        // max: realData[realData.length - 1].y,
        title: {
          display: 'true',
          text: '매출 기준 분기',
        },
        grid: {
          display: false,
        },
      },
      y: {
        axis: 'y',
        title: {
          display: 'true',
          text: '매출액(단위 : 원)',
        },
      },
    },
  };

  return (
    <Wrapper>
      {/* <Bar data={data} /> */}
      <ReportChart
        type="line"
        data={data}
        options={options}
        style={{ width: '95%', height: '600px' }}
        grad={[
          [
            [0, 'rgba(73, 208, 168, 0.8'],
            [0.95, 'rgba(249, 242, 84, 0.8)'],
          ],
          // [[0, '#ebdd4a']],
        ]}
        isVert={false}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default DynamicRateChart;
