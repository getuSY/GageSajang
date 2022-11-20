import React from 'react';
import styled from 'styled-components';
import StatusReportTitle from '../../molecules/StatusReportTitle';
import { useStatusStoreData } from '../../../hooks/status';
import { numberComma, getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';
import Top3Rank from '../../atoms/Top3Rank';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface StatusReportStoresProps {
  title?: { name: string; icon: IconDefinition };
  storesDetail?: any;
}

const StatusReportStores = ({
  title,
  storesDetail,
}: StatusReportStoresProps) => {
  const { storeCsData, storeDivData } = useStatusStoreData(storesDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연 평균 점포 수는 <span>{numberComma(storesDetail.total)}개소</span>
          입니다.
        </div>
        <div className="summary-div">
          주요 업종은 <span>{getMax(storesDetail.cs, 'cs')}</span>이고,{' '}
          <span>{getMax(storesDetail.div, 'div')}</span>
          이(가){' '}
          <span>{numberComma(Math.max.apply(Math, storesDetail.div))}개소</span>
          로 가장 많습니다.
        </div>
        <div className="summary-div">
          점포 수가 가장 많은 업종은{' '}
          <span>
            외식업 : {storesDetail.cs1Top3[0]}, 서비스업 :{' '}
            {storesDetail.cs2Top3[0]}, 도소매업 : {storesDetail.cs3Top3[0]}
          </span>{' '}
          입니다.
        </div>
      </StatusReportTitle>
      <div className="report-div">
        {/* 업종별 점포 수 */}
        <ReportContent
          title="업종별 점포 수"
          chartData={storeCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            외식업{' '}
            <span className="emphasis">
              {numberComma(storesDetail.cs[0])}개소
            </span>
            , 서비스업{' '}
            <span className="emphasis">
              {numberComma(storesDetail.cs[1])}개소
            </span>
            ,
            <br />
            도소매업{' '}
            <span className="emphasis">
              {numberComma(storesDetail.cs[2])}개소
            </span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>

        {/* 상권 구분별 점포 수 */}
        <ReportContent
          title="상권 구분별 점포 수"
          chartData={storeDivData}
          style={{ flexGrow: 1 }}
        >
          {' '}
          <ReportComment>
            골목상권{' '}
            <span className="emphasis">
              {numberComma(storesDetail.div[0])}개소
            </span>
            , 전통시장{' '}
            <span className="emphasis">
              {numberComma(storesDetail.div[1])}개소
            </span>
            ,
            <br />
            관광특구{' '}
            <span className="emphasis">
              {numberComma(storesDetail.div[2])}개소
            </span>
            , 발달상권{' '}
            <span className="emphasis">
              {numberComma(storesDetail.div[3])}개소
            </span>
            입니다.
          </ReportComment>
        </ReportContent>
      </div>
      <div className="report-div">
        <ReportContent title="외식업 내 점포 수 Top3" style={{ flexGrow: 1 }}>
          <Top3Rank
            top3={storesDetail.cs1Top3}
            style={{ marginTop: '80px' }}
            style1={{
              background: 'linear-gradient(90deg, #D3C0F7 0%, #5E28C9 100%)',
            }}
            style2={{
              background: 'linear-gradient(90deg, #A4D7FC 0%, #007ECE 100%)',
            }}
            style3={{
              background: 'linear-gradient(90deg, #BBFBF7 0%, #009FA9 100%)',
            }}
          />
        </ReportContent>
        <ReportContent title="서비스업 내 점포 수 Top3" style={{ flexGrow: 1 }}>
          <Top3Rank
            top3={storesDetail.cs2Top3}
            style1={{
              background: 'linear-gradient(90deg, #D3C0F7 0%, #5E28C9 100%)',
            }}
            style2={{
              background: 'linear-gradient(90deg, #A4D7FC 0%, #007ECE 100%)',
            }}
            style3={{
              background: 'linear-gradient(90deg, #BBFBF7 0%, #009FA9 100%)',
            }}
          />
        </ReportContent>
      </div>
      <ReportContent title="도소매업 내 점포 수 Top3" style={{ flexGrow: 1 }}>
        <Top3Rank
          top3={storesDetail.cs3Top3}
          style={{ marginTop: '80px' }}
          style1={{
            background: 'linear-gradient(90deg, #D3C0F7 0%, #5E28C9 100%)',
          }}
          style2={{
            background: 'linear-gradient(90deg, #A4D7FC 0%, #007ECE 100%)',
          }}
          style3={{
            background: 'linear-gradient(90deg, #BBFBF7 0%, #009FA9 100%)',
          }}
        />
      </ReportContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .report-div {
    display: flex;
    gap: 1rem;
  }
`;

export default StatusReportStores;
