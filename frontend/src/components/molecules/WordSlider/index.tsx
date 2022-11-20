import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface WordSliderProps {
  wordList: Array<{ name: string; subCategory: number }>;
  setSubCategory: React.Dispatch<React.SetStateAction<number>>;
}

const WordSlider = ({ wordList, setSubCategory }: WordSliderProps) => {
  const [active, setActive] = useState<number>(0);

  const getClassName = (idx: number) => {
    if (active === idx) {
      return 'active word';
    } else if ((active + 1) % wordList.length === idx) {
      return 'next word';
    } else if ((active + 2) % wordList.length === idx) {
      return 'nextt word';
    } else if ((active + wordList.length - 1) % wordList.length === idx) {
      return 'prev word';
    } else if ((active + wordList.length - 2) % wordList.length === idx) {
      return 'prevv word';
    } else {
      return 'hide word';
    }
  };

  const onClick = (idx: number) => {
    if ((active + 1) % wordList.length === idx) {
      setActive((active) => (active + 1) % wordList.length);
    } else if ((active + wordList.length - 1) % wordList.length === idx) {
      setActive((active) => (active + wordList.length - 1) % wordList.length);
    }
  };

  useEffect(() => {
    setSubCategory(wordList[active].subCategory);
  }, [active, setSubCategory, wordList]);

  return (
    <Wrapper>
      {wordList.map((e, i) => (
        <div
          className={getClassName(i)}
          onClick={() => onClick(i)}
          onDragStart={(e) => e.preventDefault()}
          key={i}
        >
          {e.name}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;
  height: 100%;
  width: 250px;
  margin: 0 20px;
  & .word {
    color: #8c8c8c;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 400ms ease;
    cursor: pointer;
  }
  & .active {
    transform: translate3d(0%, 0, 0px);
    background: ${({ theme }) => theme.gradColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 1;
  }
  & .hide {
    color: transparent;
    transform: translate3d(0%, 0, -1000px);
    opacity: 0;
  }

  & .prevv {
    transform: translate3d(0, -180%, 0) scale3d(0.6, 0.6, 0.6);
    color: transparent;
  }
  & .prev {
    transform: translate3d(0, -90%, 0) scale3d(0.7, 0.7, 0.7);
  }
  & .next {
    transform: translate3d(0, 90%, 0) scale3d(0.7, 0.7, 0.7);
  }
  & .nextt {
    transform: translate3d(0, 180%, 0) scale3d(0.6, 0.6, 0.6);
    color: transparent;
  }
`;

export default WordSlider;
