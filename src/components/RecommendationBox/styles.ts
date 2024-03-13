import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import theme from '../../global/styles/theme/';
import { translateY } from './animation';

import { Recommendation } from '../../core/recommendationStrategies/trendBasedStategy/types';

export const getAdviceStyles = (
  advice: Recommendation | null
): StyleProp<TextStyle> => {
  const adviceColor =
    advice === 'Buy'
      ? theme.colors.green
      : advice === 'Sell'
      ? theme.colors.red
      : theme.colors.base200;

  return {
    color: adviceColor,

    fontWeight: 'bold',
  };
};

export default StyleSheet.create({
  container: {
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    transform: [{ translateY: translateY }],
  },

  adviceText: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
});
