import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import ReportContent from '../../molecules/ReportContent';
import Label from '../../atoms/Label';
import { throttle } from 'lodash';
import ReportChart from '../../atoms/ReportChart';
import {
  useHinterlandData,
  useLivingData,
  useRiskData,
  useSalesData,
  useStoreCntData,
  useStoreData,
} from '../../../hooks/amatuer';

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

  const { storeCntData, storeGenderData, storeAgeData } =
    useStoreData(amatuerResult); // 업종 분석
  const {
    salesTotalData,
    salesAreaTop3Data,
    salesWeekData,
    salesTimeData,
    salesAgeData,
    salesGenderData,
  } = useSalesData(amatuerResult); // 매출 분석

  const {
    livingTotalData,
    livingAreaTop3Data,
    livingWeekData,
    livingTimeData,
    livingAgeData,
    livingGenderData,
  } = useLivingData(amatuerResult); // 유동 인구

  const { storeCntOpenData, storeCntCloseData } =
    useStoreCntData(amatuerResult); // 점포 수

  const { hinterlandPeopleData, hinterlandAgeData, hinterlandGenderData } =
    useHinterlandData(amatuerResult); // 상권 배후지

  const { riskData } = useRiskData(amatuerResult);

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

      {/* 업종 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[0] = e)}>
        <ReportContent>
          <Label>💸 업종 분석</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="연도별 점포 수" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={storeCntData.data}
              grad={storeCntData.grad}
            />
          </ReportContent>
          <ReportContent title="성별 매출">
            <ReportChart
              type="pie"
              data={storeGenderData.data}
              grad={storeGenderData.grad}
            />
          </ReportContent>
        </div>
        <ReportContent title="해당 업종 연령별 매출" style={{ flexGrow: 1 }}>
          <ReportChart
            type="pie"
            data={storeAgeData.data}
            grad={storeAgeData.grad}
          />
        </ReportContent>
      </ReportCategory>

      {/* 매출 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[1] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 매출 분석</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="해당 동 총 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="line"
              data={salesTotalData.data}
              grad={salesTotalData.grad}
              canvasStyle={{ width: '100%' }}
            />
          </ReportContent>
          <ReportContent title="해당 동 성별 매출">
            <ReportChart
              type="pie"
              data={salesGenderData.data}
              grad={salesGenderData.grad}
            />
          </ReportContent>
          <ReportContent title="👑 Top 3" style={{ width: '250px' }}>
            {salesAreaTop3Data.map((e: any, i: any) => (
              <TopItem>
                <div className="rank">{i + 1}</div>
                <div className="name">{e}</div>
              </TopItem>
            ))}
          </ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent title="해당 동 시간대별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="line"
              data={salesTimeData.data}
              grad={salesTimeData.grad}
            />
          </ReportContent>
          <ReportContent title="해당 동 연령별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={salesAgeData.data}
              grad={salesAgeData.grad}
            />
          </ReportContent>
          <ReportContent title="해당 동 요일별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={salesWeekData.data}
              grad={salesWeekData.grad}
            />
          </ReportContent>
        </div>
      </ReportCategory>

      {/* 유동인구 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[2] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 유동 인구</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent title="전체 유동인구" style={{ flexGrow: 1 }}>
            <ReportChart
              type="line"
              data={livingTotalData.data}
              grad={livingTotalData.grad}
            />
          </ReportContent>
          <ReportContent title="일별 유동인구" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={livingWeekData.data}
              grad={livingWeekData.grad}
            />
          </ReportContent>
        </div>
        <div className="chart-div">
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
          <ReportContent title="성별 유동인구">
            <ReportChart
              type="pie"
              data={livingGenderData.data}
              grad={livingGenderData.grad}
            />
          </ReportContent>
        </div>
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
          <ReportContent title="연령별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={hinterlandPeopleData.data}
              grad={hinterlandPeopleData.grad}
            />
          </ReportContent>
          <ReportContent title="연령별 매출" style={{ flexGrow: 1 }}>
            <ReportChart
              type="bar"
              data={hinterlandAgeData.data}
              grad={hinterlandAgeData.grad}
            />
          </ReportContent>
          <ReportContent title="성별 매출">
            <ReportChart
              type="pie"
              data={hinterlandGenderData.data}
              grad={hinterlandGenderData.grad}
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

const TopItem = styled.div`
  font-size: 1.1rem;
  display: flex;
  & .rank {
    font-weight: 700;
    color: red;
    margin-right: 0.8rem;
    width: 10px;
    display: flex;
    justify-content: center;
  }
  & .name {
    font-weight: 600;
  }
`;

export default ReportContentContainer;
