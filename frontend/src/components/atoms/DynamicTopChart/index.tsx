import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReportChart from '../ReportChart';
import { ReportChartProps } from '../ReportChart';
import { SimulInfo } from '../../organisms/SalesSimulation';
import { miniSerializeError } from '@reduxjs/toolkit';

interface DynamicTopChartProps {
  values: Array<number>;
  labels: Array<string>;
  title: string;
  colors: Array<any>;
  name: string;
}

const DynamicTopChart = ({
  values,
  labels,
  title,
  colors,
  name,
}: DynamicTopChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: values,
        // backgroundColor: '#eeeeee',
        borderColor: '#eeeeee',
        borderWidth: 3,
      },
    ],
  };
  let context;
  const options = {
    animation: {
      // delay: 500,
      easing: 'easeOutQuad',
      // loop: true,
    },
    interaction: {
      mode: 'index',
      axis: 'x',
    },
    reponsive: false,
    resizeDelay: 500,
    elements: { point: { pointStyle: 'rectRot', radius: 5 } },
    plugins: {
      datalabels: { display: false },
      title: {
        display: true,
        text: title,
      },
      legend: {
        display: true,
        // labels: {
        //   color: 'rgb(255, 99, 132)',
        // },
      },
    },
    scales: {
      x: {
        type: 'category',
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
        min: Math.min(...values) - 10, /// 가변값으로 설정하기
        title: {
          display: 'true',
          text: name + '(단위 : 만)',
        },
      },
    },
  };
  return (
    <Wrapper>
      <ReportChart
        type="bar"
        data={data}
        options={options}
        style={{ width: '90%', height: '400px' }}
        grad={[
          colors,
          // [
          //   [0, 'rgba(73, 208, 168, 0.8'],
          //   [0.95, 'rgba(249, 242, 84, 0.8)'],
          // ],
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

export default DynamicTopChart;
