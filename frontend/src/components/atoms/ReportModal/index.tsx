import React, { useEffect } from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ReportModalProps {
  isOpen?: boolean;
  style?: object;
  children?: React.ReactNode;
  setStatus?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportModal = ({
  isOpen,
  style,
  children,
  setIsOpen,
}: ReportModalProps) => {
  return (
    <Wrapper isOpen={isOpen} style={style}>
      <FontAwesomeIcon
        // close 버튼
        icon={faXmark}
        className="close-icon"
        onClick={() => (setIsOpen ? setIsOpen(false) : null)}
      />
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  isOpen?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  /* background: #f4f4f4; */
  background-color: white;
  flex-direction: column;
  width: 1000px;
  height: calc(100% - 100px);
  position: absolute;
  top: 82px;
  left: 20px;
  transition: left 0.6s;
  z-index: 999;
  box-shadow: 2px 2px 2px 2px darkgray;
  border-radius: 15px;

  & .close-icon {
    position: absolute;
    right: 1.5rem;
    top: 15px;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    &:hover {
      color: white;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.darkColor};
    }
  }
`;

export default ReportModal;
