import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReportContent from '../../atoms/ReportContent';
import Label from '../../atoms/Label';

type indexProps = {
  reportMenuList: Array<{ name: string; icon: string }>;
  contentRefs: React.MutableRefObject<HTMLDivElement[]>;
};

const ReportContentContainer = ({
  reportMenuList,
  contentRefs,
}: indexProps) => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => console.log('scroll!'));
  }, []);
  return (
    <Wrapper onScroll={(e) => console.log(contentRefs.current[2].scrollTop)}>
      <ReportContent style={{ background: '#FEFFCA', alignItems: 'center' }}>
        ❗ 아래 분석 결과는 통계에 따른 추정 결과입니다. 향후 상황에 따라 다를
        수 있기 때문에, 판단 하에 참고하여 활용하시기 바랍니다.
      </ReportContent>
      {reportMenuList.map((menu, i) => (
        <ReportContent
          key={`report-menu-list-${i}`}
          style={{ height: '600px' }}
          propsRef={(e: any) => (contentRefs.current[i] = e)}
        >
          <Label>💸 {menu.name}</Label>
        </ReportContent>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;

  & div + div {
    margin-top: 10px;
  }
`;

export default ReportContentContainer;
