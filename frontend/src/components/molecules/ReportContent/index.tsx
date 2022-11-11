import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';

interface ReportContentProps {
  children: React.ReactNode;
  style?: object;
  propsRef?: any;
  title?: string;
}

const ReportContent = ({
  children,
  style,
  propsRef,
  title,
}: ReportContentProps) => {
  return (
    <Wrapper style={style} ref={propsRef}>
      <Label style={{ marginBottom: '1.25rem' }}>{title}</Label>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  /* height: 500px; */
  display: flex;
  flex-direction: column;

  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContent;
