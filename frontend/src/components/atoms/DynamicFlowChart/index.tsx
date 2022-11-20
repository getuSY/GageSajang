import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import type { ChartData, ChartOptions, Chart } from 'chart.js';
import ReportChart, { ReportChartProps } from '../ReportChart';

interface DynamicFlowChartProps {
  values?: Array<number>;
  labels?: Array<string>;
  name: string;
}

type Position = { x: string; y: number };

const DynamicFlowChart = ({ values, labels, name }: DynamicFlowChartProps) => {
  // const [realData, setRealData] = useState([{ x: '2013년 1분기', y: 0 }]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: '연' + name,
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
    // elements: { point: { pointStyle: 'circle', radius: 5 } },
    elements: { point: { radius: 0 } },
    plugins: {
      datalabels: { display: false },
      title: {
        display: true,
        text: name + ' 증감 추이',
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
          text: name + ' 기준 분기',
        },
        grid: {
          display: false,
        },
      },
      y: {
        axis: 'y',
        title: {
          display: 'true',
          text: name + '(단위 : 만)',
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
        style={{ width: '90%', height: '400px' }}
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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default DynamicFlowChart;
