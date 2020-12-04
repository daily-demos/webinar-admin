import styled from "styled-components";
import theme from "../theme";

export const Header = styled.h1`
  font-size: ${theme.fontSize.xlarge};
  color: ${theme.colors.blueDark};
`;

export const SubHeader = styled.h2`
  font-size: ${theme.fontSize.large};
  color: ${theme.colors.blueDark};
`;

export const BodyText = styled.p`
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.blueDark};
`;
