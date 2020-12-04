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
  margin: 0.25rem 0;
`;

export const ListItemText = styled.li`
  color: ${theme.colors.blueDark};
  font-size: ${theme.fontSize.large};
`;

export const Icon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;