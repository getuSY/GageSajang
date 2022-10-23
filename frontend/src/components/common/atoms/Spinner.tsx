import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const spinnerInterval = 300; // 높이 변화 interval
const width = 13; // spinner bar 너비
const height = 81; // spinner bar 높이

const Spinner = () => {
  const [height1, setHeight1] = useState<number>(height * (2 / 3));
  const [height2, setHeight2] = useState<number>(height * (1 / 3));
  const [height3, setHeight3] = useState<number>(height * (2 / 3));
  const [height4, setHeight4] = useState<number>(height * (1 / 3));

  useEffect(() => {
    setInterval(() => {
      setHeight1(
        (height1) => ((height1 + height * (1 / 3)) % height) + height * (1 / 3)
      );
      setHeight2(
        (height2) => ((height2 + height * (1 / 3)) % height) + height * (1 / 3)
      );
    }, spinnerInterval);
  }, []);
  useEffect(() => {
    setTimeout(
      () =>
        setInterval(() => {
          setHeight3(
            (height3) =>
              ((height3 + height * (1 / 3)) % height) + height * (1 / 3)
          );
          setHeight4(
            (height4) =>
              ((height4 + height * (1 / 3)) % height) + height * (1 / 3)
          );
        }, spinnerInterval),
      150
    );
  }, []);
  return (
    <Wrapper
      height={height}
      width={width}
      height1={height1}
      height2={height2}
      height3={height3}
      height4={height4}
      spinnerInterval={spinnerInterval}
    >
      <div className="bar bar1" />
      <div className="bar bar2" />
      <div className="bar bar3" />
      <div className="bar bar4" />
    </Wrapper>
  );
};

type WrapperProps = {
  width: number;
  height: number;
  height1: number;
  height2: number;
  height3: number;
  height4: number;
  spinnerInterval: number;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 8px;
  height: ${({ height }) => `${height}px`};
  align-items: flex-end;
  & .bar {
    width: ${({ width }) => `${width}px`};
    transition: ${({ spinnerInterval }) => `height ${spinnerInterval}ms`};
  }
  & .bar1 {
    background: #ff5722;
    height: ${({ height1 }) => `${height1}px`};
  }
  & .bar2 {
    background: #53c882;
    height: ${({ height2 }) => `${height2}px`};
  }
  & .bar3 {
    background: #6560d2;
    height: ${({ height3 }) => `${height3}px`};
  }
  & .bar4 {
    background: #a155b9;
    height: ${({ height4 }) => `${height4}px`};
  }
`;

export default Spinner;
