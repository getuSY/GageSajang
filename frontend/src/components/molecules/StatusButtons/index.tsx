import React from 'react';
import styled from 'styled-components';
import ButtonInputs from '../ButtonInputs';

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
          <StatusSideBarLabel
            style={{ width: '50%' }}
            onClick={() => onClickLabelHandler(e.name)}
            active={e.name === category}
            key={`base-sidebar-label-${i}`}
          >
            {e.content}
          </StatusSideBarLabel>
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

interface StatusSideBarLabelProps {
  active: boolean;
}

const StatusSideBarLabel = styled.label<StatusSideBarLabelProps>`
  font-family: 'Pretendard-Regular';
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0rem 0rem 1.2rem 0rem;
  width: 100px;
  color: ${({ active, theme }) => (active ? theme.darkColor : 'lightgray')};
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.darkColor}` : '3px solid lightgray'};
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.darkColor};
    border-bottom: ${({ theme }) => `3px solid ${theme.darkColor}`};
  }
`;

export default StatusButtons;
