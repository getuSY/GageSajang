import React, { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../atoms/Spinner';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoadingPage = () => {
  const [params] = useSearchParams();
  const nextTo = params.get('nextTo');
  const navigate = useNavigate();
  useEffect(() => {
    if (nextTo) setTimeout(() => navigate(nextTo, { replace: true }), 2000);
  }, [nextTo, navigate]);
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  padding-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;
