import React from 'react';
import styled from 'styled-components';
import SalesSimulation from './SalesSimulation';

const SimulationPage = () => {
  return (
    <Wrapper>
      <TempSide></TempSide>
      <DataBox>
        <h1>SimulationPage</h1>
        <SalesSimulation></SalesSimulation>
      </DataBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TempSide = styled.div`
  background-color: green;
  width: 500px;
  height: 100%;
`;

const DataBox = styled.div``;

export default SimulationPage;
