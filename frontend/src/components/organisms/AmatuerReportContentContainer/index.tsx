import React, { useRef } from 'react';
import styled from 'styled-components';
import ReportContent from '../../molecules/AmatuerReportContent';
import AmatuerReportRisk from '../../atoms/AmatuerReportRisk';
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
      {/* 업종 분석 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[0] = e)}>
        <ReportContent title="💸 업종 분석" />
        <div className="chart-div">
          <ReportContent
            title="연도별 점포 수"
            style={{ flexGrow: 1 }}
            chartData={storeCntData}
            chartStyle={{ width: '500px' }}
            // canvasStyle={{ width: '' }}
          >
            <ReportComment style={{ width: '100%' }}>
              <span className="dongName">{dongName}</span>의{' '}
              <span className="jobName">{jobName}</span>은 작년에 비해 점포수가{' '}
              <span className="emphasis">
                {storeGenderData.data.datasets[0].data[0] <
                  storeGenderData.data.datasets[0].data[1] && '증가'}
                {storeGenderData.data.datasets[0].data[0] ===
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
      <ReportCategory ref={(e: any) => (contentRefs.current[1] = e)}>
        <ReportContent title="💸 매출 분석" style={{ marginTop: '2rem' }} />
        <div className="chart-div">
          <ReportContent
            title="해당 동 총 매출"
            style={{ flexGrow: 1 }}
            chartData={salesTotalData}
            chartStyle={{ width: '600px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>은{' '}
              <span className="emphasis"></span>
            </ReportComment>
          </ReportContent>
          <ReportContent title="해당 동 성별 매출" chartData={salesGenderData}>
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
      <ReportCategory ref={(e: any) => (contentRefs.current[2] = e)}>
        <ReportContent title="💸 유동 인구" style={{ marginTop: '2rem' }} />
        <div className="chart-div">
          <ReportContent
            title="전체 유동 인구"
            style={{ flexGrow: 1 }}
            chartData={livingTotalData}
            chartStyle={{ width: '600px' }}
          >
            <ReportComment>
              <span className="dongName">{dongName}</span>의 전체 유동인구는{' '}
              <span className="emphasis">증가</span> 하는 추세입니다.
            </ReportComment>
          </ReportContent>
          <ReportContent
            title="일별 유동 인구"
            style={{ flexGrow: 1 }}
            chartData={livingWeekData}
            isVert={false}
            chartStyle={{ width: '600px' }}
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
                    salesTimeData.data.datasets[0].data.indexOf(
                      Math.max(...salesTimeData.data.datasets[0].data)
                    )
                  ]
                }`}
              </span>
              에 가장 많습니다.
            </ReportComment>
          </ReportContent>
          <ReportContent title="성별 유동인구" chartData={livingGenderData}>
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
        </div>
      </ReportCategory>

      {/* 점포 수 */}
      <ReportCategory ref={(e: any) => (contentRefs.current[3] = e)}>
        <ReportContent title="💸 점포 수" style={{ marginTop: '2rem' }} />
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
      <ReportCategory ref={(e: any) => (contentRefs.current[4] = e)}>
        <ReportContent title="💸 상권 배후지" style={{ marginTop: '2rem' }} />
        <div className="chart-div">
          <ReportContent
            title="인구 통계"
            style={{ flexGrow: 1 }}
            chartData={hinterlandPeopleData}
          ></ReportContent>
          <ReportContent
            title="연령별 매출"
            style={{ flexGrow: 1 }}
            chartStyle={{ width: '600px' }}
            chartData={hinterlandAgeData}
          ></ReportContent>
          <ReportContent
            title="성별 매출"
            chartData={hinterlandGenderData}
          ></ReportContent>
        </div>
      </ReportCategory>
      <ReportCategory ref={(e: any) => (contentRefs.current[5] = e)}>
        <ReportContent title="💸 위험도 분석" style={{ marginTop: '2rem' }} />
        {/* <ReportAlert>❗위험 위험{riskData.risk}</ReportAlert> */}
        <AmatuerReportRisk risk={riskData.risk} />
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

const ReportComment = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  /* max-width: 400px; */
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
