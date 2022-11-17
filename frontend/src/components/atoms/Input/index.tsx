import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  inputValue?: string;
  style?: object;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: any;
  disabled?: boolean;
  inputId?: string;
}

const Input = ({
  placeholder,
  style,
  onChange,
  onClick,
  inputValue,
  clearValue,
  disabled,
  inputId,
}: InputProps) => {
  return (
    <>
      {inputValue !== undefined && (
        <>
          <Wrapper>
            <StyledInput
              placeholder={placeholder}
              style={style}
              value={inputValue}
              onChange={onChange}
              onClick={onClick}
              readOnly={onClick !== undefined}
              disabled={disabled}
              id={inputId}
            />
            {clearValue && (
              <div className="clear-btn" onClick={clearValue}>
                x
              </div>
            )}
          </Wrapper>
        </>
      )}

      {inputValue === undefined && (
        <Wrapper>
          <StyledInput
            placeholder={placeholder}
            style={style}
            onChange={onChange}
            id={inputId}
          />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  & .clear-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  font-weight: 900;
  font-size: 1rem;
  padding: 0 20px;
  background: #eaeaea;
  border: none;
  border-radius: 10px;
  outline: none;
  &:disabled {
    color: inherit;
  }
`;

export default Input;
