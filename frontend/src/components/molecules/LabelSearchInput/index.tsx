import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

interface LabelSearchInputProps {
  label: string;
  placeholder: string;
  inputValue?: string;
  clearValue?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  searchResult?: Array<string>;
  searchResultOpen: boolean;
  setSearchResultOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDong: React.Dispatch<React.SetStateAction<string>>;
  searchResultRef: React.MutableRefObject<any>;
}

const LabelSearchInput = ({
  label,
  placeholder,
  onChange,
  inputValue,
  clearValue,
  searchResult,
  searchResultOpen,
  setSearchResultOpen,
  setSelectedDong,
  searchResultRef,
}: LabelSearchInputProps) => {
  return (
    <Wrapper>
      <Label style={{ marginBottom: '1.3rem' }}>{label}</Label>
      <div className="input-div">
        <Input
          placeholder={placeholder}
          onChange={onChange}
          inputValue={inputValue}
          clearValue={clearValue}
        />
        <InputSearchResult visible={searchResultOpen} ref={searchResultRef}>
          {searchResult?.map((e, i) => (
            <InputSearchResultItem
              key={`input-search-result-${i}`}
              onClick={() => {
                setSearchResultOpen(false);
                setSelectedDong(e);
              }}
            >
              {e}
            </InputSearchResultItem>
          ))}
        </InputSearchResult>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .input-div {
    position: relative;
  }
`;

const InputSearchResult = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  background: #ffffff;
  overflow-y: scroll;
`;

const InputSearchResultItem = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  &:hover {
    background: #eaeaea;
  }
`;

export default LabelSearchInput;
