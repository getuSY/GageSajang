import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import WordSlider from '../../molecules/WordSlider';

const wordList = [
  '치킨집',
  '피자집',
  '개발자',
  '돈까스',
  '꽃집',
  '옷가게',
  '우리집',
];

const IndexSearchBar = () => {
  return (
    <Wrapper>
      <div className="search-bar-container">
        <div className="search-bar">
          <span>나</span>
          <WordSlider wordList={wordList} />
          <span>할 건데 어디에 차리지?</span>
        </div>
        <Button type="blur">보러 가기</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* 드래그 방지 */
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  & .search-bar-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: end;
    height: calc(100vh - 80px);
    width: fit-content;
    gap: 40px;

    margin-bottom: 2.5rem;
    font-size: 5rem;
    font-weight: 700;
    font-family: 'GmarketSansMedium';

    font-style: normal;
    & .search-bar {
      width: fit-content;
      display: flex;
      justify-content: center;
      position: relative;
    }
  }
`;

export default IndexSearchBar;
