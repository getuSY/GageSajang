import React from 'react';
import styled from 'styled-components';
import StatusReportTitle from '../StatusReportTitle';
import { useStatusCloseData } from '../../../hooks/status';
import { getMax } from '../../../utils/common';
import ReportContent from '../AmatuerReportContent';
import ReportComment from '../../atoms/ReportComment';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface StatusReportCloseProps {
  title?: { name: string; icon: IconDefinition };
  closeDetail?: any;
}

const StatusReportClose = ({ title, closeDetail }: StatusReportCloseProps) => {
  const { closeCsData, closeTopData } = useStatusCloseData(closeDetail);
  return (
    <Wrapper>
      <StatusReportTitle
        // 상세 페이지 내용 //
        title={title}
      >
        <div className="summary-div">
          연평균 폐업률은 <span>{closeDetail.close.total}%</span> 입니다.
        </div>
        <div className="summary-div">
          가장 많이 폐업하는 업종은{' '}
          <span>{getMax(closeDetail.close.cs, 'cs')}</span>
          이며, <span>{closeDetail.close.top3[0].name}</span>의 폐업률이 가장
          높습니다.
        </div>
        <div className="summary-div">
          상권변화지표는 <span>{closeDetail.change}</span>입니다.
        </div>
      </StatusReportTitle>

      <div className="report-div">
        {/* 업종별 폐업률 */}
        <ReportContent
          title="업종별 폐업률"
          chartData={closeCsData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            외식업 <span className="emphasis">{closeDetail.close.cs[0]}%</span>,
            서비스업{' '}
            <span className="emphasis">{closeDetail.close.cs[1]}%</span>,
            도소매업{' '}
            <span className="emphasis">{closeDetail.close.cs[2]}%</span> 입니다.
          </ReportComment>
        </ReportContent>

        {/* 폐업률 높은 상권 Top3 */}
        <ReportContent
          title="폐업률 높은 상권 Top3"
          chartData={closeTopData}
          style={{ flexGrow: 1 }}
        >
          <ReportComment>
            {closeDetail.close.top3[0].name}{' '}
            <span className="emphasis">{closeDetail.close.top3[0].per}%</span>,{' '}
            {closeDetail.close.top3[1].name}{' '}
            <span className="emphasis">{closeDetail.close.top3[1].per}%</span>,
            <br />
            {closeDetail.close.top3[2].name}{' '}
            <span className="emphasis">{closeDetail.close.top3[2].per}%</span>{' '}
            입니다.
          </ReportComment>
        </ReportContent>
      </div>
      <div className="report-div">
        <ReportContent
          title="상권변화지표"
          style={{
            flexGrow: 1.31,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {closeDetail.change === '정체' && (
            <img src="assets/status/stop.png" />
          )}
          {closeDetail.change === '상권축소' && (
            <img src="assets/status/down.png" />
          )}
          {closeDetail.change === '상권확장' && (
            <img src="assets/status/up.png" />
          )}
          {closeDetail.change === '다이나믹' && (
            <img src="assets/status/dynamic.png" />
          )}
          <ReportComment style={{ fontWeight: 700, color: '#6193F2' }}>
            {closeDetail.change}
            {closeDetail.change === '정체' && '(LL)'}
            {closeDetail.change === '상권축소' && '(LH)'}
            {closeDetail.change === '상권확장' && '(HL)'}
            {closeDetail.change === '다이나믹' && '(HH)'}
          </ReportComment>
        </ReportContent>
        <ReportContent style={{ flexGrow: 1 }}>
          <ReportComment
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div className="status-change-div">
              <div className="status-change-line">
                <span className="status-change">
                  <img
                    src="assets/status/stop.png"
                    className="status-change-img"
                  />
                  정체(LL)
                </span>
                <span className="status-change">
                  <img
                    src="assets/status/down.png"
                    className="status-change-img"
                  />
                  상권축소(LH)
                </span>
              </div>
              <div className="status-change-line">
                <span className="status-change">
                  <img
                    src="assets/status/up.png"
                    className="status-change-img"
                  />
                  상권확장(HL)
                </span>
                <span className="status-change">
                  <img
                    src="assets/status/dynamic.png"
                    className="status-change-img"
                  />
                  다이나믹(HH)
                </span>
              </div>
            </div>
            <div className="status-change-description">
              (운영)
              <br />
              H : 서울시 운영 영업 개월 평균 &#62;= 해당 구 운영 영업 개월 평균
              <br />L : 서울시 운영 영업 개월 평균 &#60; 해당 구 운영 영업 개월
              평균
              <br />
              <br />
              (폐업)
              <br />H : 서울시 폐업 영업 개월 평균 &#62;= 해당 구 폐업 영업 개월
              평균
              <br />L : 서울시 폐업 영업 개월 평균 &#60; 해당 구 폐업 영업 개월
              평균
            </div>
          </ReportComment>
        </ReportContent>
      </div>
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

  & .status-change-div {
    display: flex;
    flex-direction: column;

    & .status-change-line {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;

      & .status-change-img {
        width: 2rem;
        margin-right: 0.7rem;
      }

      & .status-change {
        border: 2px solid #6193f2;
        border-radius: 5px;
        display: flex;
        align-items: center;
        height: 3rem;
        width: 10rem;
        padding: 0px 10px;
      }
    }
  }
  & .status-change-description {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export default StatusReportClose;
