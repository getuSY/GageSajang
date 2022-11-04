import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonInputs from '../ButtonInputs';
import BaseSideBarLabel from '../../atoms/BaseSideBarLabel';

interface StatusButtonsProps {
  content: any;
  category: string;
  onClickLabelHandler: any;
  tab?: number;
}

const statusList = [
  { name: 'main', content: '상권' },
  { name: 'sub', content: '상권 배후지' },
];

const StatusButtons = ({
  content,
  category,
  onClickLabelHandler,
  tab,
}: StatusButtonsProps) => {
  return (
    <Wrapper>
      <div className="label-div">
        {statusList.map((e, i) => (
          <BaseSideBarLabel
            style={{ width: '50%' }}
            onClick={() => onClickLabelHandler(e.name)}
            active={e.name === category}
            key={`base-sidebar-label-${i + 1}`}
          >
            {e.content}
          </BaseSideBarLabel>
        ))}
      </div>
      <ButtonInputs menuList={content} tab={tab} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & .label-div {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;

export default StatusButtons;
