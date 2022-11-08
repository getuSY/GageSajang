import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SlideBar from './';

export default {
  title: 'atoms/SlideBar',
  component: SlideBar,
} as ComponentMeta<typeof SlideBar>;

const [pos, setPose] = useState(0);

export const inSlideBar: ComponentStory<typeof SlideBar> = () => (
  <SlideBar
    setPos={setPose}
    // allowAnyClick={allowAnyClick}
    // axis={axis}
    // bounds={bounds}
    // defaultPosition={defaultPosition}
    // disabled={disabled}
    // cancel={cancel}
    // defaultClassName={defaultClassName}
    // defaultClassNameDragging={defaultClassNameDragging}
    // defaultClassNameDragged={defaultClassNameDragged}
    // grid={grid}
    // offsetParent={offsetParent}
    // onMouseDown={onMouseDown}
    // onStart={onStart}
    // onDrag={onDrag}
    // onStop={onStop}
    // nodeRef={nodeRef}
    // positionOffset={positionOffset}
    // scale={scale}
  />
);
