import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

interface IndexItemDescriptionProps {
  right?: boolean;
  content: any;
  onClick?: any;
}

const IndexItemDescription = ({
  right,
  content,
  onClick,
}: IndexItemDescriptionProps) => {
  return (
    <Wrapper right={right}>
      <div className="title">{content.title}</div>
      <div className="content">{content.description}</div>
      <Button
        style={{
          background: content.buttonColor,
          width: '250px',
          height: '73px',
          fontWeight: 600,
          fontSize: '1.2rem',
        }}
        onClick={onClick}
        type="grad"
      >
        {content.buttonContent}
      </Button>
    </Wrapper>
  );
};

interface WrapperProps {
  right?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
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
