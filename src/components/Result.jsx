import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Result = ({ label, value, main, column = false, href = false }) => {
  return (
    <FlexContainer column={column}>
      <Label main={main}>{label}</Label>
      <Value>{href ? <A href={value}>{value}</A> : value}</Value>
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
const A = styled.a`
  text-decoration: none;
  color: ${theme.colors.blueDark};
  text-decoration: underline;
`;
export default Result;
