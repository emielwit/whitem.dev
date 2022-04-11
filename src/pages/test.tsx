import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  background: red;
`;
// markup
const Test = (): JSX.Element => {
  return <StyledH1>Test</StyledH1>;
};

export default Test;
