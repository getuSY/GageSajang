import React from 'react';
import styled from 'styled-components';
import RoundBox from '../../atoms/RoundBox/index';
import Label from '../../atoms/Label/index';
import LabelInput from '../LabelInput/index';

interface DoubledBoxProps {
  title: string;
  style?: object;
}

const DoubledBox = ({ title, style }: DoubledBoxProps) => {
  return (
    <Wrapper style={style}>
      <RoundBox style={upperBox}>
        <img
          src="assets/img/pro_storeinfo.jpg"
          alt="store_image"
          width="200px"
        ></img>
      </RoundBox>
      <Label>{title}</Label>
      {/* <RoundBox style={backBox}>
        <Label>{title}</Label>
      </RoundBox> */}
      <LabelInput label="가게 이름" placeholder="가게 이름을 입력" />
      <LabelInput label="가게 주소" placeholder="가게 주소를 입력" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  width: 250px;
  height: 500px;
  background-color: green;
  text-align: center;
`;

const upperBox = {
  // postion: 'absolute',
  position: 'relative',
  top: '0px',
  left: '0px',
  width: 'inherit',
  height: '50%',
  'background-color': 'lightgreen',
  // opacity: '0.5',
  'border-radius': '20px',
  'box-shadow': 'none',
};

export default DoubledBox;
