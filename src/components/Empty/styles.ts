import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
  },

  text: {
    color: theme.colors.base200,

    fontSize: 18,
  },
});
