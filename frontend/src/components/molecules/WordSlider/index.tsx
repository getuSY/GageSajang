import React, { useState } from 'react';
import styled from 'styled-components';

interface WordSliderProps {
  wordList: Array<string>;
}

const WordSlider = ({ wordList }: WordSliderProps) => {
  const [active, setActive] = useState<number>(0);

  // useEffect(() => {
  //   console.log('interval');
  //   let slideInterval: NodeJS.Timer = setInterval(() => {
  //     setActive((active) => (active + 1) % wordList.length);
  //   }, 1000);
  // }, []);

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
  return (
    <Wrapper>
      {wordList.map((e, i) => (
        <div
          className={getClassName(i)}
          onClick={() => onClick(i)}
          onDragStart={(e) => e.preventDefault()}
          key={i}
        >
          {e}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    transition: 400ms ease;
    cursor: pointer;
  }
  & .active {
    transform: translate3d(0%, 0, 0px);
    font-family: 'nunito';
    background: ${({ theme }) => theme.gradColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 1;
  }
  & .hide {
    color: white;
    transform: translate3d(0%, 0, -1000px);
    opacity: 0;
  }

  & .prevv {
    transform: translate3d(0, -140%, 0) scale3d(0.6, 0.6, 0.6);
    color: white;
  }
  & .prev {
    transform: translate3d(0, -80%, 0) scale3d(0.8, 0.8, 0.8);
  }
  & .next {
    transform: translate3d(0, 80%, 0) scale3d(0.8, 0.8, 0.8);
  }
  & .nextt {
    transform: translate3d(0, 140%, 0) scale3d(0.6, 0.6, 0.6);
    color: white;
  }
`;

export default WordSlider;
