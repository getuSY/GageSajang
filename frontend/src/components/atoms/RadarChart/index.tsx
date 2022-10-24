import React from 'react';
import styled from 'styled-components';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

// interface RadarProps {
//     options?: ChartOptions<'radar'>;
//     data : ChartData<'radar'>;
// }

interface RadarProps {
  data: ChartData<'radar'>;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const data = {
//     labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [2, 9, 3, 5, 2, 3],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

const RadarChart = ({ data }: RadarProps) => {
  return (
    <Wrapper>
      <Radar
        data={data}
        // options={options}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default RadarChart;
