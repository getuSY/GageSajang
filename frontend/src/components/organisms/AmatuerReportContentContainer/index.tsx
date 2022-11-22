import React, { useRef } from 'react';
import styled from 'styled-components';
import ReportContent from '../../molecules/AmatuerReportContent';
import { throttle } from 'lodash';
import {
  useHinterlandData,
  useLivingData,
  useRiskData,
  useSalesData,
  useStoreCntData,
  useStoreData,
  weekLabels,
  timeLabels,
  useAmatuerSimulationData,
} from '../../../hooks/amatuer';
import Top3Rank from '../../atoms/Top3Rank';
import ReportComment from '../../atoms/ReportComment';
import RiskGaugeChart from '../../atoms/RiskGaugeChart';

type indexProps = {
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  amatuerResult: any;
  dongName?: string;
  jobName?: string;
  amatuerSimulation: any;
};

const ReportContentContainer = ({
  contentRefs,
  setTab,
  amatuerResult,
  dongName,
  jobName,
  amatuerSimulation,
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
  } = useStoreCntData(amatuerResult); // 점포 수

  const { hinterlandPeopleData, hinterlandAgeData, hinterlandGenderData } =
    useHinterlandData(amatuerResult); // 상권 배후지

  const { riskData } = useRiskData(amatuerResult); // 위험도 분석
  const {
    amaSimulSalesData,
    amaSimulLifeData,
    amaSimulResidentData,
    amaSimulJobData,
    amaSimulCountData,
  } = useAmatuerSimulationData(amatuerSimulation);
  // console.log(amatuerSimulation);

  return (
    <Wrapper onScroll={onScroll} ref={containerRef}>
      <ReportAlert>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportAlert>
      {/* 창업 위험도 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[0] = e)}>
        <ReportContent title="창업 위험도" titleIcon="circle-exclamation" />
        <div className="chart-div">
          <RiskGaugeChart gauge={riskData.risk} style={{ width: '500px' }} />
          <ReportContent
            title="창업 위험도 설명"
            style={{ flexGrow: 1, alignItems: 'flex-start' }}
          >
            <ReportRiskDescription>
              <div className="risk-desc">
                <span className="risk-name risk-name1">고위험</span>
                <span> : </span>
                <span>해당 업종은 창업을 강력히 비추천 드립니다.</span>
              </div>
              <div className="risk-desc">
                <span className="risk-name risk-name2">위험</span>
                <span> : </span>
                <span>
                  해당 업종은 창업하는데 어려움이 있습니다. 다른 업종 및 지역을
                  고려하시길 추천드립니다.
                </span>
              </div>
              <div className="risk-desc">
                <span className="risk-name risk-name3">주의</span>
                <span> : </span>
                <span>
                  이 지역에서 해당 업종을 창업할 시 주의가 필요합니다.
                </span>
              </div>
              <div className="risk-desc">
                <span className="risk-name risk-name4">정상</span>
                <span> : </span>
                <span>이 지역에서 해당 업종은 전망이 좋은 편입니다.</span>
              </div>
            </ReportRiskDescription>
            <div className="data-desc">
              위험도 데이터 출처 : 서울신용보증재단 100대 생활밀접업종
              창업위험도
            </div>
          </ReportContent>
        </div>
      </ReportCategory>
      {/* 업종 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[1] = e)}>
        <ReportContent
          title="업종 분석"
          style={{ marginTop: '2rem' }}
          titleIcon="shop"
        />
        <div className="chart-div">
          <ReportContent
            title="연도별 점포 수"
            style={{ flexGrow: 1 }}
            chartData={storeCntData}
            chartStyle={{ width: '450px' }}
            // canvasStyle={{ width: '' }}
          >
            <ReportComment style={{ width: '100%' }}>
              <span className="dongName">{dongName}</span>의{' '}
              <span className="jobName">{jobName}</span>은 작년에 비해 점포수가{' '}
              <span className="emphasis">
                {storeCntData.data.datasets[0].data[0] <
                  storeCntData.data.datasets[0].data[1] && '증가'}
                {storeCntData.data.datasets[0].data[0] ===
                  storeCntData.data.datasets[0].data[1] && '유지'}
                {storeCntData.data.datasets[0].data[0] >
                  storeCntData.data.datasets[0].data[1] && '감소'}
              </span>
              하는 추세입니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="성별 매출"
            chartData={storeGenderData}
            style={{ width: '350px' }}
          >
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
          <ReportContent
            title="해당 업종 연령별 매출"
            chartData={storeAgeData}
            style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
          >
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
      <ReportCategory ref={(e: any) => (contentRefs.current[2] = e)}>
        <ReportContent
          title="매출 분석"
          style={{ marginTop: '2rem' }}
          titleIcon="chart-line"
        />
        <div className="chart-div">
          <ReportContent
            title="해당 동 총 매출"
            style={{ flexGrow: 1 }}
            chartData={salesTotalData}
            chartStyle={{ width: '500px' }}
          >
            {/* <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis"></span>
            </ReportComment> */}
          </ReportContent>
          <ReportContent
            title="해당 동 성별 매출"
            chartData={salesGenderData}
            style={{ width: '350px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis">
                {salesGenderData.data.datasets[0].data[0] >=
                salesGenderData.data.datasets[0].data[1]
                  ? '남성'
                  : '여성'}
              </span>{' '}
              매출이 높습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="👑 Top 3"
            style={{
              width: '360px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Top3Rank top3={salesAreaTop3Data} />
          </ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="해당 동 시간대별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesTimeData}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis">
                {`${
                  timeLabels[
                    salesTimeData.data.datasets[0].data.indexOf(
                      Math.max(...salesTimeData.data.datasets[0].data)
                    )
                  ]
                }`}
              </span>
              에 매출이 가장 높습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="해당 동 연령별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesAgeData}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis">
                {`${
                  salesAgeData.data.datasets[0].data.indexOf(
                    Math.max(...salesAgeData.data.datasets[0].data)
                  ) + 1
                }0대`}
              </span>
              에게 인기가 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="해당 동 요일별 매출"
            style={{ flexGrow: 1 }}
            chartData={salesWeekData}
            isVert={false}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis">
                {`${
                  weekLabels[
                    salesWeekData.data.datasets[0].data.indexOf(
                      Math.max(...salesWeekData.data.datasets[0].data)
                    )
                  ]
                }요일`}
              </span>
              에 매출이 가장 높습니다.
            </ReportComment>
          </ReportContent>
        </div>
      </ReportCategory>

      {/* 유동 인구 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[3] = e)}>
        <ReportContent
          title="유동 인구"
          style={{ marginTop: '2rem' }}
          titleIcon="people-group"
        />
        <div className="chart-div">
          <ReportContent
            title="전체 유동 인구"
            style={{ flexGrow: 1 }}
            chartData={livingTotalData}
            chartStyle={{ width: '500px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 전체 유동인구는{' '}
              <span className="emphasis">증가</span> 하는 추세입니다.
            </ReportComment>
          </ReportContent>

          <ReportContent
            title="성별 유동인구"
            chartData={livingGenderData}
            style={{ width: '350px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 유동인구는{' '}
              <span className="emphasis">
                {storeGenderData.data.datasets[0].data[0] >=
                storeGenderData.data.datasets[0].data[1]
                  ? '남성'
                  : '여성'}
              </span>
              이 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="👑 Top 3"
            style={{
              width: '360px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Top3Rank top3={livingAreaTop3Data} />
          </ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="연령대별 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingAgeData}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 유동인구는{' '}
              <span className="emphasis">
                {`${
                  livingAgeData.data.datasets[0].data.indexOf(
                    Math.max(...livingAgeData.data.datasets[0].data)
                  ) + 1
                }0대`}
              </span>
              가 가장 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="시간대별 유동인구"
            style={{ flexGrow: 1 }}
            chartData={livingTimeData}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 유동인구는{' '}
              <span className="emphasis">
                {`${
                  timeLabels[
                    livingTimeData.data.datasets[0].data.indexOf(
                      Math.max(...livingTimeData.data.datasets[0].data)
                    )
                  ]
                }`}
              </span>
              에 가장 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="일별 유동 인구"
            style={{ flexGrow: 1 }}
            chartData={livingWeekData}
            isVert={false}
            // chartStyle={{ width: '600px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 유동인구는{' '}
              <span className="emphasis">
                {`${
                  weekLabels[
                    livingWeekData.data.datasets[0].data.indexOf(
                      Math.max(...livingWeekData.data.datasets[0].data)
                    )
                  ]
                }요일`}
              </span>
              에 가장 많습니다.
            </ReportComment>
          </ReportContent>
        </div>
      </ReportCategory>

      {/* 점포 수 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[4] = e)}>
        <ReportContent
          title="점포 수"
          style={{ marginTop: '2rem' }}
          titleIcon="cash-register"
        />
        <div className="chart-div">
          <ReportContent
            title="개업 현황"
            style={{ flexGrow: 1 }}
            chartData={storeCntOpenData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>
          <ReportContent
            title="개업률"
            style={{ flexGrow: 1 }}
            chartData={storeCntOpenRateData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="폐업 현황"
            style={{ flexGrow: 1 }}
            chartData={storeCntCloseData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>
          <ReportContent
            title="폐업률"
            style={{ flexGrow: 1 }}
            chartData={storeCntCloseRateData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>
        </div>
      </ReportCategory>

      {/* 상권 배후지 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[5] = e)}>
        <ReportContent
          title="상권 배후지"
          style={{ marginTop: '2rem' }}
          titleIcon="house-circle-check"
        />
        <div className="chart-div">
          <ReportContent
            title="인구 통계"
            style={{ flexGrow: 1 }}
            chartData={hinterlandPeopleData}
          ></ReportContent>
          <ReportContent
            title="연령대별 인구"
            style={{ flexGrow: 1 }}
            chartStyle={{ width: '450px' }}
            chartData={hinterlandAgeData}
          ></ReportContent>
          <ReportContent
            title="성별별 인구"
            chartData={hinterlandGenderData}
            style={{ width: '350px' }}
          ></ReportContent>
        </div>
      </ReportCategory>

      {/* 시뮬레이션 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[6] = e)}>
        <ReportContent
          title="시뮬레이션"
          style={{ marginTop: '2rem' }}
          titleIcon="square-poll-vertical"
        />
        <ReportAlert>
          ❗<div className="emphasis">{dongName}</div>의
          <div className="emphasis" style={{ margin: '0 0.3rem' }}>
            {jobName}
          </div>
          향후
          <div className="emphasis" style={{ marginLeft: '0.3rem' }}>
            5분기
          </div>
          의 예측 결과입니다. 향후 상황에 따라 오차가 있을 수 있기 때문에, 판단
          하에 참고하여 활용하시기 바랍니다.
        </ReportAlert>
        <ReportContent
          title="시뮬레이션 안내"
          style={{ flexGrow: 1, alignItems: 'flex-start' }}
        >
          <ReportRiskDescription>
            <div className="risk-desc" style={{ marginLeft: '10px' }}>
              가게사장의 시뮬레이션은 서울열린데이터광장에서 제공하는 2013년부터
              2020년까지의 사회적, 경제적, 상업적 요인을 고려하여 머신러닝 시킨
              결과입니다.
            </div>
            <div className="risk-desc" style={{ marginLeft: '20px' }}>
              - 사회적요인 : 생활인구,직장인구,거주인구 <br></br>- 경제적요인 :
              경제성장률, 매출금액, 매출건수, 지출 총금액, 월평균 소득금액{' '}
              <br></br>- 상업적요인 : 개폐, 유사업종, 프랜차이즈, 점포수
            </div>
          </ReportRiskDescription>
        </ReportContent>
        <div className="chart-div">
          <ReportContent
            title="분기별 매출"
            style={{ flexGrow: 1 }}
            chartData={amaSimulSalesData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>

          <ReportContent
            title="분기별 점포 수"
            style={{ flexGrow: 1 }}
            // chartStyle={{ width: '450px' }}
            chartData={amaSimulCountData}
            chartStyle={{ width: '600px' }}
          ></ReportContent>
        </div>
        <div className="chart-div">
          <ReportContent
            title="분기별 유동인구"
            style={{ flexGrow: 1 }}
            // chartStyle={{ width: '450px' }}
            chartData={amaSimulLifeData}
          ></ReportContent>
          <ReportContent
            title="분기별 거주인구"
            chartData={amaSimulResidentData}
          ></ReportContent>
          <ReportContent
            title="분기별 직업인구"
            style={{ flexGrow: 1 }}
            chartData={amaSimulJobData}
          ></ReportContent>
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
    @media screen and (max-width: 1200px) {
      flex-wrap: wrap;
    }
    /* flex-wrap: wrap; */
    width: 100%;
    gap: 12px;
  }
`;

const ReportAlert = styled.div`
  background: #feffca;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  padding: 20px 20px;
  border-radius: 10px;
  & > .emphasis {
    font-weight: 700;
  }
`;

const ReportCategory = styled.div`
  & > div {
    margin-top: 12px;
  }
`;

const ReportRiskDescription = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  & .risk-desc {
    margin-top: 8px;
  }
  & .risk-name {
    font-weight: 700;
  }
  & .risk-name1 {
    color: #f0533e;
  }
  & .risk-name2 {
    color: #eea25c;
  }
  & .risk-name3 {
    color: #e9e059;
  }
  & .risk-name4 {
    color: #62ff6f;
  }
  & .data-desc {
    font-size: 1.1rem;
    justify-self: end;
  }
  & .data-source {
    font-size: 1rem;
    color: gray;
    margin-top: 10px;
  }
  & .emphasis {
    font-weight: 700;
  }
`;

export default ReportContentContainer;
