import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
`;

export const FormHeader = styled.p`
  font-weight: 600;
  color: ${theme.colors.orange};
  font-size: ${theme.fontSize.large};
`;

export const Label = styled.label`
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.greyDark};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${theme.colors.grey};
`;

export const SubmitButton = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${theme.colors.turquoise};
  border: 1px solid ${theme.colors.turquoise};
  color: ${theme.colors.blueDark};
  font-weight: 600;
  margin-top: 2rem;
  width: 175px;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.teal};
  }
  &:disabled {
    opacity: 0.5;
  }
`;
