import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import ReportContent from '../../molecules/ReportContent';
import Label from '../../atoms/Label';
import { throttle } from 'lodash';
import {
  useHinterlandData,
  useLivingData,
  useRiskData,
  useSalesData,
  useStoreCntData,
  useStoreData,
} from '../../../hooks/amatuer';
import Top3Rank from '../../atoms/Top3Rank';

type indexProps = {
  reportMenuList: Array<{ name: string; icon: string }>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  amatuerResult: any;
  dongName?: string;
  jobName?: string;
};

const ReportContentContainer = ({
  reportMenuList,
  contentRefs,
  setTab,
  amatuerResult,
  dongName,
  jobName,
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

  const {
    storeCntOpenData,
    storeCntOpenRateData,
    storeCntCloseData,
    storeCntCloseRateData,
    storeCntOpenMultiData,
  } = useStoreCntData(amatuerResult); // 점포 수

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
          <ReportContent
            title="연도별 점포 수"
            style={{ flexGrow: 1 }}
            chartData={storeCntData}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의{' '}
              <span className="jobName">{jobName}</span>은 작년에 비해 점포수가{' '}
              <span className="emphasis">
                {storeGenderData.data.datasets[0].data[0] <
                  storeGenderData.data.datasets[0].data[1] && '증가'}
                {storeGenderData.data.datasets[0].data[0] ==
                  storeGenderData.data.datasets[0].data[1] && '유지'}
                {storeGenderData.data.datasets[0].data[0] >
                  storeGenderData.data.datasets[0].data[1] && '감소'}
              </span>
              하는 추세입니다.
            </ReportComment>
          </ReportContent>
          <ReportContent title="성별 매출" chartData={storeGenderData}>
            <ReportComment>
              <span className="dongName">{dongName}</span>의{' '}
              <span className="jobName">{jobName}</span>은{' '}
              <span className="emphasis">
                {storeGenderData.data.datasets[0].data[0] >=
                storeGenderData.data.datasets[0].data[1]
                  ? '남성'
                  : '여성'}
              </span>
              에게 인기가 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent title="해당 업종 연령별 매출" chartData={storeAgeData}>
            <ReportComment>
              <span className="dongName">{dongName}</span>의{' '}
              <span className="jobName">{jobName}</span>은{' '}
              <span className="emphasis">
                {`${
                  storeAgeData.data.datasets[0].data.indexOf(
                    Math.max(...storeAgeData.data.datasets[0].data)
                  ) + 1
                }0대`}
              </span>
              에게 인기가 많습니다.
            </ReportComment>
          </ReportContent>
        </div>
      </ReportCategory>

      {/* 매출 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[1] = e)}>
        <ReportContent style={{ marginTop: '2rem' }}>
          <Label>💸 매출 분석</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent
            title="해당 동 총 매출"
            style={{ flexGrow: 1 }}
            chartData={salesTotalData}
          ></ReportContent>
          <ReportContent
            title="해당 동 성별 매출"
            chartData={salesGenderData}
          ></ReportContent>
          <ReportContent title="👑 Top 3">
            {/* {salesAreaTop3Data.map((e: any, i: any) => (
              <TopItem>
                <div className="rank">{i + 1}</div>
                <div className="name">{e}</div>
              </TopItem>
            ))} */}
            <Top3Rank top3={salesAreaTop3Data} />
          </ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="해당 동 시간대별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesTimeData}
          ></ReportContent>
          <ReportContent
            title="해당 동 연령별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesAgeData}
          ></ReportContent>
          <ReportContent
            title="해당 동 요일별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesWeekData}
            isVert={false}
          ></ReportContent>
        </div>
      </ReportCategory>

      {/* 유동인구 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[2] = e)}>
        <ReportContent style={{ marginTop: '2rem' }}>
          <Label>💸 유동 인구</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent
            title="전체 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingTotalData}
          ></ReportContent>
          <ReportContent
            title="일별 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingWeekData}
          ></ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="연령대별 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingAgeData}
          ></ReportContent>
          <ReportContent
            title="시간대별 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingTimeData}
          ></ReportContent>
          <ReportContent
            title="성별 유동인구"
            chartData={livingGenderData}
          ></ReportContent>
        </div>
      </ReportCategory>

      {/* 점포 수 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[3] = e)}>
        <ReportContent style={{ marginTop: '2rem' }}>
          <Label>💸 점포 수</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent
            title="개업 현황"
            style={{ flexGrow: 1 }}
            chartData={storeCntOpenData}
          ></ReportContent>
          <ReportContent
            title="개업률"
            style={{ flexGrow: 1 }}
            chartData={storeCntOpenRateData}
          ></ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="폐업 현황"
            style={{ flexGrow: 1 }}
            chartData={storeCntCloseData}
          ></ReportContent>
          <ReportContent
            title="폐업률"
            style={{ flexGrow: 1 }}
            chartData={storeCntCloseRateData}
          ></ReportContent>
        </div>
      </ReportCategory>

      {/* 상권 배후지 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[4] = e)}>
        <ReportContent style={{ marginTop: '2rem' }}>
          <Label>💸 상권 배후지</Label>
        </ReportContent>
        <div className="chart-div">
          <ReportContent
            title="인구 통계"
            style={{ flexGrow: 1 }}
            chartData={hinterlandPeopleData}
          ></ReportContent>
          <ReportContent
            title="연령별 매출"
            style={{ flexGrow: 1 }}
            chartData={hinterlandAgeData}
          ></ReportContent>
          <ReportContent
            title="성별 매출"
            chartData={hinterlandGenderData}
          ></ReportContent>
        </div>
      </ReportCategory>
      <ReportCategory ref={(e: any) => (contentRefs.current[5] = e)}>
        <ReportContent style={{ marginTop: '3rem' }}>
          <Label>💸 위험도 분석</Label>
        </ReportContent>
        <ReportAlert>❗위험 위험</ReportAlert>
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

const ReportComment = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  & .jobName,
  .dongName {
    font-weight: 700;
  }
  & .emphasis {
    font-weight: 700;
    color: #ff0000;
  }
`;

export default ReportContentContainer;
