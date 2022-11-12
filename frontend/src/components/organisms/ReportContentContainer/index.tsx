import React, { useRef, useMemo } from 'react';
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

  // 업종 분석
  const storeCntData = useMemo(
    () => ({
      data: {
        labels: ['2021년', '2022년'],
        datasets: [
          {
            label: '해당 업종 점포수',
            data: [amatuerResult.store.yearAgo, amatuerResult.store.total],
            barThickness: 50,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeAgeData = useMemo(
    () => ({
      data: {
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
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#714BF4'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeGenderData = useMemo(
    () => ({
      data: {
        labels: ['남', '여'],
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.store.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeOpenData = useMemo(
    () => ({
      data: {
        labels: ['1', '2'],
        datasets: [
          {
            label: 'storeOpenData',
            barThickness: 70,
            data: amatuerResult.open,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const storeCloseData = useMemo(
    () => ({
      data: {
        labels: ['1', '2'],
        datasets: [
          {
            label: 'storeOpenData',
            barThickness: 70,
            data: amatuerResult.close,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [1, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 매출 분석
  const salesTotalData = useMemo(
    () => ({
      data: {
        labels: [2018, 2019, 2020, 2021, 2022],
        datasets: [
          {
            label: '해당 업종 동 매출',
            data: amatuerResult.sales.total,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const salesAreaTop3Data = useMemo(
    () => ({
      data: {
        labels: [2018, 2019, 2020, 2021, 2022],
        datasets: [
          {
            label: '해당 업종 동 매출',
            data: amatuerResult.sales.total,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const salesWeekData = useMemo(
    () => ({
      data: {
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
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );
  const salesTimeData = useMemo(
    () => ({
      data: {
        labels: [
          '시간대1',
          '시간대2',
          '시간대3',
          '시간대4',
          '시간대5',
          '시간대6',
        ],
        datasets: [
          {
            label: '시간대별 매출',
            data: amatuerResult.sales.time,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const salesAgeData = useMemo(
    () => ({
      data: {
        labels: [
          '시간대1',
          '시간대2',
          '시간대3',
          '시간대4',
          '시간대5',
          '시간대6',
        ],
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.sales.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const salesGenderData = useMemo(
    () => ({
      data: {
        labels: ['남', '여'],
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.sales.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 유동 인구 => 데이터 수정 필요
  const livingTotalData = useMemo(
    () => ({
      data: {
        labels: [2018, 2019, 2020, 2021, 2022],
        datasets: [
          {
            label: '해당 업종 동 매출',
            data: amatuerResult.living.total,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const livingAreaTop3Data = useMemo(
    () => ({
      data: {
        labels: [2018, 2019, 2020, 2021, 2022],
        datasets: [
          {
            label: '해당 업종 동 매출',
            data: amatuerResult.living.areaTop3,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const livingWeekData = useMemo(
    () => ({
      data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
          {
            label: '요일별 매출',
            data: amatuerResult.living.week,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );
  const livingTimeData = useMemo(
    () => ({
      data: {
        labels: [
          '시간대1',
          '시간대2',
          '시간대3',
          '시간대4',
          '시간대5',
          '시간대6',
        ],
        datasets: [
          {
            label: '시간대별 매출',
            data: amatuerResult.living.time,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const livingAgeData = useMemo(
    () => ({
      data: {
        labels: ['10대', '20대', '30대', '40대', '50대', '60대'],
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.living.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const livingGenderData = useMemo(
    () => ({
      data: {
        labels: ['남', '여'],
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.living.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  // 상권 배후지 =>
  const hinterlandAgeData = useMemo(
    () => ({
      data: {
        labels: [
          '시간대1',
          '시간대2',
          '시간대3',
          '시간대4',
          '시간대5',
          '시간대6',
        ],
        datasets: [
          {
            label: '연령대별 매출',
            data: amatuerResult.hinterland.age,
            barThickness: 30,
            datalabels: {
              // 데이터라벨 숨김
              color: 'transparent',
            },
          },
        ],
      },
      grad: [
        [
          [0, '#A82BEC'],
          [0.8, '#545BF9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  const hinterlandGenderData = useMemo(
    () => ({
      data: {
        labels: ['남', '여'],
        datasets: [
          {
            label: '매출',
            barThickness: 70,
            data: amatuerResult.hinterland.gender,
            datalabels: {
              // 데이터라벨 숨김
              color: 'white',
            },
          },
        ],
      },
      grad: [
        [
          [0.5, '#A82BEC'],
          [1, '#545BF9'],
        ],
        [
          [0.5, '#2bec4b'],
          [1, '#54a1f9'],
        ],
      ],
    }),
    [amatuerResult]
  );

  return (
    <Wrapper onScroll={onScroll} ref={containerRef}>
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      {/* <div
        className="content-div"
        ref={(e: any) => (contentRefs.current[0] = e)}
      > */}
      {/* 매출 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[0] = e)}>
        <ReportContent>
          <Label>💸 매출 분석</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="해당 동 총 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="line"
              data={salesTotalData.data}
              grad={salesTotalData.grad}
            />
          </ReportContent>
          <ReportContent title="💸 해당 동 요일별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={salesWeekData.data}
              grad={salesWeekData.grad}
            />
          </ReportContent>
        </div>
      </ReportCategory>

      {/* 유동인구 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[1] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 유동 인구</Label>
        </ReportContent>
        <ReportContent title="일별 유동인구" style={{ flexGrow: 1 }}>
          <ReportChart
            type="bar"
            data={livingWeekData.data}
            grad={livingWeekData.grad}
          />
        </ReportContent>
        <ReportContent title="연령대별 유동인구" style={{ flexGrow: 1 }}>
          <ReportChart
            type="radar"
            data={livingAgeData.data}
            // grad={livingAgeData.grad}
          />
        </ReportContent>
        <ReportContent title="시간대별 유동인구" style={{ flexGrow: 1 }}>
          <ReportChart
            type="line"
            data={livingTimeData.data}
            grad={livingTimeData.grad}
          />
        </ReportContent>
      </ReportCategory>

      {/* 업종 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[2] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 업종 분석</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="연령대별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={storeCntData.data}
              grad={storeCntData.grad}
            />
          </ReportContent>
          <ReportContent title="성별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="pie"
              data={storeGenderData.data}
              grad={storeGenderData.grad}
            />
          </ReportContent>
        </div>
        <ReportContent title="해당 업종 동 매출" style={{ flexGrow: 1 }}>
          <ReportChart
            type="bar"
            data={storeAgeData.data}
            grad={storeAgeData.grad}
          />
        </ReportContent>
      </ReportCategory>

      {/* 점포 수 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[3] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 점포 수</Label>
        </ReportContent>
      </ReportCategory>

      {/* 상권 배후지 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[4] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 상권 배후지</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="해당 업종 동 매출" style={{ width: '55%' }}>
            <ReportChart
              type="bar"
              data={storeAgeData.data}
              grad={storeAgeData.grad}
            />
          </ReportContent>
          <ReportContent title="성별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="pie"
              data={storeGenderData.data}
              grad={storeGenderData.grad}
            />
          </ReportContent>
        </div>
      </ReportCategory>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
  overflow-y: scroll;

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

const ReportCategory = styled.div`
  & > div {
    margin-top: 12px;
  }
`;

export default ReportContentContainer;
