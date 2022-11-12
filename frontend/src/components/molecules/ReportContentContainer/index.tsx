import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReportContent from '../../atoms/ReportContent';
import Label from '../../atoms/Label';
import { throttle } from 'lodash';
import ReportChart from '../../atoms/ReportChart';
import { greenTheme } from '../../../styles/theme';
import createGradient from '../../../utils/createGradient';
import { Chart as ChartJS } from 'chart.js';

type indexProps = {
  reportMenuList: Array<{ name: string; icon: string }>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  amatuerResult: any;
};

const ReportContentContainer = ({
  reportMenuList,
  contentRefs,
  setTab,
  amatuerResult,
}: indexProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onScroll = throttle(() => {
    // 스크롤 이벤트
    let i = contentRefs.current.length - 1;
    const currentPos: number = containerRef.current
      ? containerRef.current.scrollTop
      : 0;
    while (i >= 0) {
      if (currentPos + 100 >= contentRefs.current[i].offsetTop) break;
      i -= 1;
    }
    setTab(Math.max(i, 0));
  }, 100);

  useEffect(() => {
    console.log('amatuerResult');
    console.log(amatuerResult);
  }, [amatuerResult]);

  const barData = {
    labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
    datasets: [
      {
        label: '유동 인구',
        data: amatuerResult.store.age,
        barThickness: 30,
        datalabels: {
          // 데이터라벨 숨김
          color: 'transparent',
        },
      },
    ],
  };

  return (
    <Wrapper onScroll={onScroll} ref={containerRef}>
      <ReportContent
        style={{ background: '#FEFFCA', justifyContent: 'center' }}
      >
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportContent>

      <div className="content-div">
        {reportMenuList.map((menu, i) => (
          <ReportContent
            key={`report-menu-list-${i}`}
            propsRef={(e: any) => (contentRefs.current[i] = e)}
          >
            <Label>💸 {menu.name}</Label>
            <ReportChart
              type="bar"
              data={barData}
              grad={[
                [0, '#A82BEC'],
                [0.4, '#714BF4'],
                [1, '#545BF9'],
              ]}
              // chartRef={chartRef}
            />
          </ReportContent>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
  overflow-y: scroll;
  & .content-div > div {
    margin-top: 12px;
  }
  padding: 12px;
`;

export default ReportContentContainer;
