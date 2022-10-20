import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BorderButton from "../../components/common/atoms/BorderButton";
import GradButton from "../../components/common/atoms/GradButton";
import MainButton from "../../components/common/atoms/MainButton";
import SubButton from "../../components/common/atoms/SubButton";
import BlurButton from "../../components/common/atoms/BlurButton";

const Green = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <MainButton text='green' onClick={() => navigate("/green")} />
      <SubButton text='blue' onClick={() => navigate("/blue")} />
      <BorderButton text='purple' onClick={() => navigate("/purple")} />
      <GradButton text='orange' onClick={() => navigate("/orange")} />
      <BlurButton text='previous' onClick={() => navigate(-1)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100px;
`;
export default Green;
