import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import ReportChart from '../../atoms/ReportChart';

interface RiskGaugeChartProps {
  style?: object;
  chartStyle?: any;
  canvasStyle?: any;
  gauge?: 1 | 2 | 3 | 4;
}

const chartData = {
  type: 'doughnut',
  data: {
    datasets: [
      {
        label: 'Gauge',
        data: [1, 1, 1, 1],
        backgroundColor: ['#f0533e', '#eea25c', '#e9e059', '#62ff6f'],
      },
    ],
  },
  options: {
    circumference: 180,
    rotation: -90,
    // cutoutPercentage: 80, // precent
    plugins: {
      datalabels: {
        color: '#ffffff',
        formatter: function (value: any, context: any) {
          return `${['고위험', '위험', '주의', '정상'][context.dataIndex]}`;
        },
        font: {
          size: 16,
          weight: 700,
        },
      },
    },
    // legend: {
    //   display: false,
    // },
    // title: {
    //   display: false,
    // },
    // tooltip: {
    //   enabled: false,
    // },
    events: [],
    // tooptips: {
    //   enable: false,
    // },
    // hover: false,
  },
};

const RiskGaugeChart = ({
  style,
  chartStyle,
  canvasStyle,
  gauge = 4,
}: RiskGaugeChartProps) => {
  return (
    <Wrapper style={style} gauge={gauge}>
      <ReportChart
        type="doughnut"
        data={chartData.data}
        options={chartData.options}
        style={{ ...chartStyle }}
        canvasStyle={canvasStyle}
      />
      <div className="pointer" />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ gauge: 1 | 2 | 3 | 4 }>`
  background: #ffffff;
  /* height: 500px; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
  border-radius: 10px;
  & .pointer {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #000;
    position: absolute;
    z-index: 1000;
    bottom: 42px;
    left: 50%;
    transform: ${({ gauge }) => `rotate(${20 + (gauge - 1) * 45}deg)`};
    transition: transform 0.5s;
    &::before {
      content: '';
      /* width: 100px;
      height: 10px; */
      width: 0px;
      height: 0px;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-right: 120px solid #000000;
      border-radius: 100px;
      /* background: #ff0000; */
      position: absolute;
      right: 10px;
      top: 0;
    }
  }
`;

export default RiskGaugeChart;
