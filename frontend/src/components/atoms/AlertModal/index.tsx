import React from 'react';
import styled from 'styled-components';

type AlertModalProps = {
  title: string;
  message: string;
};

const AlertModal = ({ title, message }: AlertModalProps) => {
  return (
    <Wrapper>
      <h1>AlertModal</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AlertModal;
