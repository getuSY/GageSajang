import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';
import ReportChart from '../../atoms/ReportChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChartLine,
  faShop,
  faCashRegister,
  faHouseCircleCheck,
  faPeopleGroup,
  faLocationDot,
  faStore,
  faCircleExclamation,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faShop,
  faHouseCircleCheck,
  faChartLine,
  faCashRegister,
  faPeopleGroup,
  faLocationDot,
  faStore,
  faCircleExclamation,
  faSquarePollVertical
);

interface ReportContentProps {
  children?: React.ReactNode;
  style?: object;
  propsRef?: any;
  title?: string;
  titleIcon?: any;
  chartData?: any;
  isVert?: boolean;
  chartStyle?: any;
  canvasStyle?: any;
}

const ReportContent = ({
  children,
  style,
  propsRef,
  title,
  chartData,
  isVert,
  chartStyle,
  canvasStyle,
  titleIcon,
}: ReportContentProps) => {
  return (
    <Wrapper style={style} ref={propsRef} isIcon={titleIcon ? true : false}>
      <div className="title">
        {titleIcon && <FontAwesomeIcon icon={titleIcon} />}
        {title && (
          <Label
            style={{
              fontFamily: 'GmarketSansMedium',
            }}
          >
            {title}
          </Label>
        )}
      </div>
      {chartData && (
        <ReportChart
          type={chartData.type}
          data={chartData.data}
          grad={chartData.grad}
          options={chartData.options}
          isVert={isVert}
          style={{ marginTop: '1.25rem', ...chartStyle }}
          canvasStyle={canvasStyle}
        />
      )}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isIcon?: boolean }>`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1.3rem;
  & .title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export default ReportContent;
