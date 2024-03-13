import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    gap: 10,
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  label: {
    color: theme.colors.base300,

    fontSize: 12,
    textAlign: 'center',
  },

  button: {
    width: 100,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: theme.colors.base100,
    borderWidth: 1,
    borderRadius: 15,
  },

  text: {
    color: theme.colors.base300,

    fontSize: 12,
    fontWeight: 'bold',
  },

  arrayOfSocials: {
    flexDirection: 'row',
    gap: 4,
  },
});
