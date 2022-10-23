import React, { useEffect } from 'react';
import styled from 'styled-components';
import IndexItemDescription from '../../molecules/IndexItemDescription';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IndexItemProps {
  right?: boolean;
  content: any;
  onClick?: any;
}

const IndexItem = ({ content, right, onClick }: IndexItemProps) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper
      data-aos={right ? 'fade-right' : 'fade-left'}
      data-aos-duration="1000"
    >
      {right ? (
        <>
          <img src={content.imgSrc} alt="" />
          <IndexItemDescription content={content} onClick={onClick} right />
        </>
      ) : (
        <>
          <IndexItemDescription content={content} onClick={onClick} />
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

export default IndexItem;
