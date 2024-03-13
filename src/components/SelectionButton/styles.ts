import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    paddingHorizontal: 12,
    borderColor: theme.colors.base100,
    borderWidth: 1,
    borderRadius: 15,
  },

  text: {
    color: theme.colors.base300,
  },

  buttonSelected: {
    backgroundColor: theme.colors.base100,
  },
});
