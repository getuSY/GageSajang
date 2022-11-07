import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import WordSlider from '../../molecules/WordSlider';
import { useNavigate } from 'react-router-dom';

const wordList = [
  { name: '한식집', code: 'cs100001' },
  { name: '중국집', code: 'cs100002' },
  { name: '일식집', code: 'cs100003' },
  { name: '제과점', code: 'cs100005' },
  { name: '치킨집', code: 'cs100007' },
  { name: '분식집', code: 'cs100008' },
  { name: '술집', code: 'cs100009' },
  { name: '카페', code: 'cs100010' },
];

const IndexSearchBar = () => {
  const navigate = useNavigate();
  const [jobCode, setJobCode] = useState(wordList[0].code);

  const onClickHandler = () => navigate(`/amatuer/result?code=${jobCode}`);

  return (
    <Wrapper>
      <div className="search-bar-container">
        <div className="search-bar">
          <div>나</div>
          <WordSlider wordList={wordList} setJobCode={setJobCode} />

          {'할 건데 어디에 차리지?'.split(' ').map((e, i) => (
            <div style={{ marginRight: '1.3rem' }} key={i}>
              {e}
            </div>
          ))}
        </div>
        <Button type="blur" onClick={onClickHandler}>
          보러 가기
        </Button>
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
      align-items: center;
      position: relative;
    }
  }
`;

export default IndexSearchBar;
