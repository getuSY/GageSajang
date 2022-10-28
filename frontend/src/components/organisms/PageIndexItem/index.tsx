import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageIndexContent } from '../../../models/common';
import IndexItemDescription from '../../molecules/IndexItemDescription';

// 이미사장, 아마사장 메인 페이지

interface PageIndexItemProps {
  right?: boolean;
  content: PageIndexContent;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PageIndexItem = ({ content, right, onClick }: PageIndexItemProps) => {
  return (
    <Wrapper>
      {' '}
      {right ? (
        <>
          <img src={content.imgSrc} alt="" />
        </>
      ) : (
        <>
          <img src={content.imgSrc} alt="" />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  gap: 30px;
  & img {
    width: 675px;
    height: 675px;
  }
`;

export default PageIndexItem;
