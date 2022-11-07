import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import {
  DraggableBounds,
  DraggableEvent,
  DraggableEventHandler,
  DraggableData,
  ControlPosition,
  PositionOffsetControlPosition,
  DraggableCoreProps,
} from 'react-draggable';

interface DraggableProps {
  allowAnyClick?: boolean;
  position?: { x: number; y: number };
  axis?: string;
  bounds?:
    | { left?: number; top?: number; right?: number; bottom?: number }
    | string;
  defaultPosition?: { x: number; y: number };
  disabled?: boolean;
  cancel?: string;
  defaultClassName?: string;
  defaultClassNameDragging?: string;
  defaultClassNameDragged?: string;
  grid?: [number, number];
  offsetParent?: HTMLElement;
  onMouseDown?: (e: MouseEvent) => void;
  onStart?: DraggableEventHandler;
  onDrag?: DraggableEventHandler;
  onStop?: DraggableEventHandler;
  nodeRef?: React.Ref<typeof React.Component>;
  positionOffset?: { x: number | string; y: number | string };
  scale?: number;
  deliver?: (params: number) => number | void;
}

interface SlideBarProps extends DraggableProps {}

const SlideBar = ({
  allowAnyClick,
  axis,
  bounds,
  defaultPosition,
  disabled,
  cancel,
  defaultClassName,
  defaultClassNameDragging,
  defaultClassNameDragged,
  grid,
  offsetParent,
  onMouseDown,
  onStart,
  onDrag,
  onStop,
  nodeRef,
  positionOffset,
  scale,
  deliver,
}: SlideBarProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('white');
  useEffect(() => {
    deliver?(position.x)
  }, [position]);
  const trackPos = (data: ControlPosition) => {
    setPosition({ x: data.x, y: data.y });
    console.log({ x: data.x, y: data.y });
  };
  const lightenColor = () => {
    setColor('green');
  };
  const darkenColor = () => {
    setColor('white');
  };
  const years = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  const yearList = years.map((i) => <div>{i}</div>);
  return (
    <>
      <Wrapper>
        <Draggable
          axis="x"
          onDrag={(e, data) => trackPos(data)}
          onStart={lightenColor}
          onStop={darkenColor}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[50, 0]}
          bounds={{ top: 0, left: 0, right: 500, bottom: 0 }}
        >
          <SliderBody className="box" style={{ backgroundColor: `${color}` }}>
            <div>Handle</div>
            {/* <div>
              x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
            </div> */}
          </SliderBody>
        </Draggable>
      </Wrapper>
      <WrapperLabel>{yearList}</WrapperLabel>
    </>
  );
};

const Wrapper = styled.div`
  width: 575px;
  height: 40px;
  background-color: ${({ theme }) => theme.subColor};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: 'relative';
  overflow: 'auto';
  padding-left: 20px;
`;

const WrapperLabel = styled.div`
  /* width: 625px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: 'relative';
  overflow: 'auto';
  padding: 0px 25px;
  text-align: center;
  gap: 15px; */
  width: 575px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: 'relative';
  overflow: 'auto';
  padding-left: 10px;
  padding-right: 15px;
  text-align: center;
  /* gap: 13px; */
`;

const SliderBody = styled.div`
  position: absolute;
  cursor: move;
  color: black;
  border-radius: 50%;
  user-select: none;
  width: 50px;
  height: 50px;
  border: solid white;
`;

export default SlideBar;
