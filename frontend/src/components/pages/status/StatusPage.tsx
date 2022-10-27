import React, { useEffect } from 'react';
import styled from 'styled-components';
import areas from '../../../data/areaGu.json';
import GeometryMap from '../../organisms/GeometryMap';

const StatusPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scroll!');
    });
  }, []);
  return (
    <Wrapper>
      <GeometryMap areas={areas.features} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default StatusPage;
