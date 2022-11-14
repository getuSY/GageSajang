import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import WordSlider from '../../molecules/WordSlider';
import { useNavigate } from 'react-router-dom';

const wordList = [
  { name: '한식집', subCategory: 1 },
  { name: '중국집', subCategory: 2 },
  { name: '일식집', subCategory: 3 },
  { name: '제과점', subCategory: 5 },
  { name: '치킨집', subCategory: 7 },
  { name: '분식집', subCategory: 8 },
  { name: '술집', subCategory: 9 },
  { name: '카페', subCategory: 10 },
];

const IndexSearchBar = () => {
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState(wordList[0].subCategory);

  const onClickHandler = () =>
    navigate(`/amatuer/analysis?mainCategory=1&subCategory=${subCategory}`);

  return (
    <Wrapper>
      <img src="/assets/img/bg-check-out.png" className="bg-img" />
      <div className="search-bar-container">
        <div className="search-bar">
          <div>나</div>
          <WordSlider wordList={wordList} setSubCategory={setSubCategory} />

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
  & .bg-img {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.4;
  }
  position: relative;
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
