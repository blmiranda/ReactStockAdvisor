import { DefaultTheme } from '@react-navigation/native';
import theme from '../global/styles/theme';

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.neutralWhite,
  },
};
