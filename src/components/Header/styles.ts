import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    paddingVertical: 18,

    alignItems: 'center',
  },

  text: {
    color: theme.colors.base300,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
