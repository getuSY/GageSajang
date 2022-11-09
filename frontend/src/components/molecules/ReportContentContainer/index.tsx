import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReportContent from '../../atoms/ReportContent';
import Label from '../../atoms/Label';
import { throttle } from 'lodash';
import ReportChart from '../../atoms/ReportChart';
import { greenTheme } from '../../../styles/theme';

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
    console.log(amatuerResult);
  }, [amatuerResult]);

  const people = {
    data: {
      labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
      datasets: [
        {
          label: '# of Votes',
          data: amatuerResult?.store.age,
          backgroundColor: [
            greenTheme.mainColor,
            greenTheme.subColor,
            greenTheme.gradColor,
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            greenTheme.mainColor,
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      aspectRatio: 5 / 4,
    },
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
            style={{ height: '600px' }}
            propsRef={(e: any) => (contentRefs.current[i] = e)}
          >
            <Label>💸 {menu.name}</Label>
            <ReportChart
              type="bar"
              data={people.data}
              options={people.options}
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
    margin-top: 10px;
  }
`;

export default ReportContentContainer;
