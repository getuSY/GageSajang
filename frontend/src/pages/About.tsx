import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100px;
`;

export default About;
