import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShadowBox from '../../atoms/ShadowBox';

interface BaseSideBarProps {
  children?: React.ReactNode;
  title: string;
  open?: boolean;
  setStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaseSideBar = ({
  children,
  title,
  open,
  setStatus,
}: BaseSideBarProps) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(open ? open : false);

  useEffect(() => {
    if (setStatus) {
      setStatus(isOpen);
    }
  }, [isOpen]);

  return (
    <Wrapper isOpen={isOpen}>
      <button
        className="toggle-btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? '<' : '>'}
      </button>
      <ShadowBox
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          zIndex: '999',
          background: '#ffffff',
          // borderRadius: '6px',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          // overflowY: 'scroll',
        }}
      >
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </ShadowBox>
    </Wrapper>
  );
};

interface WrapperProps {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  & .toggle-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 25px;
    height: 53px;
    top: 10px;
    transform: translateX(calc(100% + 60px));
    background: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
    z-index: 10111;
    cursor: pointer;
    font-size: 20px;
  }
  display: flex;
  background: #ffffff;
  width: 360px;
  height: calc(100% - 125px);
  /* max-height: 900px; */
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? '0px' : '-426px')};
  /* top: 60px; */
  top: 66px;
  /* top: 80px; */
  transition: left 0.9s;
  z-index: 999;
  & .title {
    margin: 12px 0;
    font-weight: 600;
    font-family: 'Pretendard-Regular';
    font-size: 24px;
    line-height: 29px;
  }
  & .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default BaseSideBar;
