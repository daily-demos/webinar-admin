import styled from "styled-components";
import theme from "../theme";

export const SettingsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SettingsListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.1rem 0;
`;

export const ListItemText = styled.p`
  color: ${theme.colors.blueDark};
  font-size: ${theme.fontSize.med};
  margin: 0;
`;

export const Icon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;
