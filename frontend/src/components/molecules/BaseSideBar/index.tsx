import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

interface BaseSideBarProps {
  children?: React.ReactNode;
  title: string;
  style?: object;
  isOpen?: boolean;
  statusmark?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaseSideBar = ({
  children,
  title,
  style,
  statusmark,
  isOpen,
  setIsOpen,
}: BaseSideBarProps) => {
  return (
    <Wrapper isOpen={isOpen} style={style}>
      <button
        className="toggle-btn"
        onClick={() =>
          setIsOpen ? setIsOpen((isOpen: boolean) => !isOpen) : null
        }
      >
        {isOpen ? '<' : '>'}
      </button>
      <ShadowBox>
        {statusmark ? (
          <div className="title-div">
            <FontAwesomeIcon icon={faChartArea} className="title-icon" />
            <div className="title">{title}</div>
          </div>
        ) : (
          <div className="title">{title}</div>
        )}

        <div className="content">{children}</div>
      </ShadowBox>
    </Wrapper>
  );
};

interface WrapperProps {
  isOpen?: boolean;
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
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? '0px' : '-426px')};
  top: 66px;
  transition: left 0.6s;
  z-index: 999;

  & .title-div {
    display: flex;
    align-items: center;
    gap: 10px;

    & .title-icon {
      font-size: 22px;
    }
  }

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

const ShadowBox = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: calc(100% - 1px);
  position: absolute;
  top: 0;
  z-index: 999;
  background: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export default BaseSideBar;
