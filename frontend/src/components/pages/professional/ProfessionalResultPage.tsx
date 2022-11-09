import React from 'react';
import styled from 'styled-components';
import ProfessionalSideBar from '../../molecules/ProfessionalSideBar/index';
import SalesSimulation from '../simulation/SalesSimulation';

interface ProfessionalResultProps {}

const professionalResultPage = ({}: ProfessionalResultProps) => {
  return (
    <Wrapper>
      <ProfessionalSideBar></ProfessionalSideBar>
      <Result>
        <SalesSimulation>dsdsdd</SalesSimulation>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
`;

export default professionalResultPage;
