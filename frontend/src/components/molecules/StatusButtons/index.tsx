import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonInputs from '../ButtonInputs';
import { useNavigate } from 'react-router-dom';

interface StatusButtonsProps {
  mainContent: any;
  subContent: any;
  category?: string;
  isHide?: boolean;
  onClickLabelHandler?: React.MouseEventHandler<HTMLLabelElement>;
}

const StatusButtons = ({
  mainContent,
  subContent,
  category,
  isHide,
  onClickLabelHandler,
}: StatusButtonsProps) => {
  return (
    <Wrapper>
      <ButtonInputs
        label="상권 현황"
        menuList={mainContent}
        category={category}
        isHide={!isHide}
        onClickLabelHandler={onClickLabelHandler}
      />
      <ButtonInputs
        label="상권 배후지 현황"
        menuList={subContent}
        category={category}
        isHide={isHide}
        onClickLabelHandler={onClickLabelHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default StatusButtons;
