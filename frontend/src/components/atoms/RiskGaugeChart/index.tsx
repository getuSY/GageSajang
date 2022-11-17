import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import ReportChart from '../../atoms/ReportChart';

interface RiskGaugeChartProps {
  children?: React.ReactNode;
  style?: object;
  propsRef?: any;
  title?: string;
  chartStyle?: any;
  canvasStyle?: any;
}

const RiskGaugeChart = ({
  children,
  style,
  propsRef,
  title,
  chartStyle,
  canvasStyle,
}: RiskGaugeChartProps) => {
  const chartData = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: 'Gauge',
          data: [1, 1, 1, 1],
          backgroundColor: ['#f0533e', '#eea25c', '#fff671', '#62ff6f'],
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
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };
  return (
    <Wrapper style={style} ref={propsRef}>
      {title && (
        <Label
          style={{
            width: '100%',
            fontSize: '1.3rem',
          }}
        >
          {title}
        </Label>
      )}
      {chartData && (
        <ReportChart
          type="doughnut"
          data={chartData.data}
          options={chartData.options}
          style={{ marginTop: '1.25rem', ...chartStyle }}
          canvasStyle={canvasStyle}
        />
      )}
      <div className="pointer" />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    transform: rotate(160deg);
    &::before {
      content: '';
      width: 80px;
      height: 10px;
      background: #ff0000;
      position: absolute;
      right: 10px;
      top: 0;
      transform: rotate(0deg);
    }
  }
`;

export default RiskGaugeChart;
