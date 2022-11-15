import React from 'react';
import styled from 'styled-components';

interface AmatuerReportRiskProps {
  risk: number;
}

// 1: 고위험  2: 위험  3: 주의  4: 정상
const riskMessage = [
  {},
  {
    risk: '고위험',
    message: '❗ 강력히 비추천 ❗',
    color: '#ff0000',
  },
  {
    risk: '위험',
    message: '비추천',
    color: '#ff4800',
  },
  {
    risk: '주의',
    color: '#e59e00',
  },
  {
    risk: '정상',
    color: '#36e671',
  },
];
const AmatuerReportRisk = ({ risk }: AmatuerReportRiskProps) => {
  return (
    <Wrapper riskColor={riskMessage[risk].color}>
      {risk && (
        <div>
          {'창업 위험도가 '}{' '}
          <span className="emphasis">{riskMessage[risk].risk}</span>
          {'입니다.'}
        </div>
      )}
      {risk && risk <= 2 && (
        <div>
          창업하는 것을{' '}
          <span className="emphasis">{riskMessage[risk].message}</span>{' '}
          드립니다.
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ riskColor?: string }>`
  height: 40px;
  align-items: center;
  font-size: 1.2rem;
  display: flex;
  /* background: #feffca; */
  background: #ffffff;
  padding: 20px 20px;
  border-radius: 10px;
  & .emphasis {
    font-weight: 700;
    color: ${({ riskColor }) => riskColor};
    /* margin-left: 0.4rem; */
  }
`;

export default AmatuerReportRisk;
