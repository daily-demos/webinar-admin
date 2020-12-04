import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Result = ({ label, value }) => {
  return (
    <FlexContainer>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </FlexContainer>
  );
};

const FlexContainer = styled.p`
  display: flex;
  font-size: ${theme.fontSize.med};
  color: ${theme.colors.blueDark};
  margin: 0.25rem 0;
`;
const Label = styled.span`
  font-weight: 600;
`;
const Value = styled.span`
  margin-left: 0.25rem;
`;
export default Result;
