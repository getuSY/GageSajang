import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { IndexContent } from '../../../models/common';

interface IndexItemDescriptionProps {
  right?: boolean;
  content: IndexContent;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IndexItemDescription = ({
  right,
  content,
  onClick,
}: IndexItemDescriptionProps) => {
  return (
    <Wrapper right={right}>
      <div className="index-div">
        <div className="title">{content.title}</div>
        <div className="content">{content.description}</div>
      </div>
      <Button
        style={{
          background: content.buttonColor,
          width: '250px',
          height: '73px',
          fontSize: '1.3rem',
          fontFamily: 'GmarketSansMedium',
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

  /* font-family: 'Pretendard-Regular'; */
  font-family: 'GmarketSansMedium';
  align-items: ${({ right }) => (!right ? 'flex-end' : 'flex-start')};
  gap: 2.5rem;
  & .index-div {
    display: flex;
    flex-direction: column;
    align-items: ${({ right }) => (!right ? 'flex-end' : 'flex-start')};
    gap: 1rem;
  }
  & .title {
    font-size: 64px;
  }
  & .content {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export default IndexItemDescription;
