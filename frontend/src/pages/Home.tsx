import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BorderButton from '../components/common/atoms/BorderButton';
import FillButton from '../components/common/atoms/FillButton';

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/about');
  };

  return (
    <Wrapper>
      <h1>Home</h1>
      <BorderButton text="hello" onClick={onClick} />
      <FillButton text="hello" onClick={onClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Home;
