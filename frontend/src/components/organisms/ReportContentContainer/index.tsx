import React, { useRef } from 'react';
import styled from 'styled-components';
import ReportContent from '../../molecules/ReportContent';
import Label from '../../atoms/Label';
import { throttle } from 'lodash';
import ReportChart from '../../atoms/ReportChart';

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

  const storeAgeData = {
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

  const storeGenderData = {
    labels: ['남', '여'],
    datasets: [
      {
        label: '매출',
        barThickness: 70,
        data: amatuerResult.store.gender,
      },
    ],
  };

  const dayData = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '요일별 매출',
        data: amatuerResult.sales.week,
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
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      <div
        className="content-div"
        ref={(e: any) => (contentRefs.current[0] = e)}
      >
        {/* 업종 분석 */}
        <div className="chart-div">
          <ReportContent title="💸 업종분석" style={{ flexGrow: 1 }}>
            해당 동 전체 점포 수
          </ReportContent>
          <ReportContent title="💸 업종분석" style={{ flexGrow: 1 }}>
            <ReportChart
              type="pie"
              data={storeGenderData}
              grad={[
                [
                  [0.5, '#A82BEC'],
                  [1, '#545BF9'],
                ],
                [
                  [0.5, '#2bec4b'],
                  [1, '#54a1f9'],
                ],
              ]}
            />
          </ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent title="💸 업종분석" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={storeAgeData}
              grad={[
                [
                  [0, '#A82BEC'],
                  [0.8, '#714BF4'],
                  [1, '#545BF9'],
                ],
              ]}
            />
          </ReportContent>
        </div>
        {/* 유동인구 */}
        <div className="chart-div">
          <ReportContent title="💸 유동인구" style={{ flexGrow: 1 }}>
            유동인구
          </ReportContent>
        </div>
        {/* 매출분석 */}
        <div className="chart-div">
          <ReportContent
            title="💸 매출분석"
            propsRef={(e: any) => (contentRefs.current[0] = e)}
          >
            매출분석
          </ReportContent>
          <ReportContent
            title="💸 매출분석"
            propsRef={(e: any) => (contentRefs.current[0] = e)}
            style={{ flexGrow: 1 }}
          >
            <ReportChart
              type="bar"
              data={dayData}
              grad={[
                [
                  [0, '#A82BEC'],
                  [0.8, '#545BF9'],
                ],
              ]}
            />
          </ReportContent>
        </div>
        {/* 업종 분석 */}
        <div className="chart-div">
          <ReportContent
            title="💸 매출분석"
            propsRef={(e: any) => (contentRefs.current[0] = e)}
          >
            <ReportChart
              type="pie"
              data={storeGenderData}
              grad={[
                [
                  [0.5, '#A82BEC'],
                  [1, '#545BF9'],
                ],
                [
                  [0.5, '#2bec4b'],
                  [1, '#54a1f9'],
                ],
              ]}
            />
          </ReportContent>
          <ReportContent
            title="💸 매출분석"
            propsRef={(e: any) => (contentRefs.current[0] = e)}
            style={{ flexGrow: 1 }}
          >
            <ReportChart
              type="bar"
              data={dayData}
              grad={[
                [
                  [0, '#A82BEC'],
                  [0.8, '#545BF9'],
                ],
              ]}
            />
          </ReportContent>
        </div>
        {/* reportMenuList */}
        {/* {reportMenuList.map((menu, i) => (
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
            />
          </ReportContent>
        ))} */}
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
  & .chart-div {
    display: flex;
    width: 100%;
    gap: 12px;
  }
`;

const ReportAlert = styled.div`
  background: #feffca;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 10px;
`;

export default ReportContentContainer;
