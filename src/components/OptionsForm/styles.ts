import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';
import { translateY } from './animations.ts';

export default StyleSheet.create({
  buttonsContainer: {
    paddingVertical: 12,

    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },

  divider: {
    backgroundColor: theme.colors.base100,
    height: 1.5,
  },

  buttonOptionsContainer: {
    overflow: 'hidden',
  },

  buttonOptions: {
    height: 60,

    transform: [{ translateY: translateY }],
  },

  flatList: {
    gap: 10,

    paddingHorizontal: 28,
    paddingVertical: 12,
  },

  submitButton: {
    alignSelf: 'center',

    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: theme.colors.base100,
    borderWidth: 1,
    borderRadius: 12,
  },
  submitButtonPressed: {
    backgroundColor: theme.colors.base100,
  },
  submitText: {
    color: theme.colors.base300,
    fontWeight: 'bold',
  },
});
