import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GradButton from '../atoms/GradButton';

interface IndexItemDescriptionProps {
  right?: boolean;
  content: any;
}

const IndexItemDescription = ({
  right,
  content,
}: IndexItemDescriptionProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper right={right}>
      <div className="title">{content.title}</div>
      <div className="content">{content.description}</div>
      <GradButton
        content={content.buttonContent}
        style={{
          background: content.buttonColor,
          width: '250px',
          height: '73px',
          fontWeight: 600,
          fontSize: '1.2rem',
        }}
        onClick={() => navigate(`/${content.name}`)}
      />
    </Wrapper>
  );
};

interface WrapperProps {
  right?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  align-items: ${({ right }) => (!right ? 'flex-end' : 'flex-start')};
  gap: 0.75rem;
  & .title {
    font-size: 64px;
    font-weight: 800;
  }
  & .content {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;

export default IndexItemDescription;
