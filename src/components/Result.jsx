import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Result = ({ label, value, main, column = false }) => {
  return (
    <FlexContainer column={column}>
      <Label main={main}>{label}</Label>
      <Value>{value}</Value>
    </FlexContainer>
  );
};

const FlexContainer = styled.p`
  display: flex;
  font-size: ${theme.fontSize.med};
  color: ${theme.colors.blueDark};
  margin: 0.25rem 0;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
const Label = styled.span`
  font-weight: 600;
  color: ${(props) => (props.main ? theme.colors.orange : theme.colors.blue)};
`;
const Value = styled.span`
  margin-left: 0.25rem;
  word-break: break-all;
`;
export default Result;
