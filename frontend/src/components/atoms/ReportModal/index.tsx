import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ReportModalProps {
  open?: boolean;
  style?: object;
  children?: React.ReactNode;
  setStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportModal = ({
  open,
  style,
  setStatus,
  children,
}: ReportModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (setStatus) {
      setStatus(isOpen);
    }
  }, [isOpen]);
  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  return (
    <Wrapper isOpen={isOpen} style={style}>
      <FontAwesomeIcon icon={faXmark} className="close-icon"></FontAwesomeIcon>
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background: #ffffff;
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
    /* font-size: 2rem; */
    cursor: pointer;
    /* color: ; */
    width: 2rem;
    height: 2rem;

    &:hover {
      color: white;
      /* border: 1px solid #001aa4; */
      border-radius: 5px;
      background-color: #001aa4;
    }
  }
`;

export default ReportModal;
