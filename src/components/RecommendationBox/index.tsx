import { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

import { IconName } from '@fortawesome/fontawesome-svg-core';

import styles, { getAdviceStyles } from './styles.ts';
import { floatIcon } from './animation.ts';

import useAdvisor from '../../hooks/useAdvisor/index.ts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from '../../global/styles/theme/index.ts';

const RecommendationBox = (): JSX.Element => {
  const { advice } = useAdvisor();

  useEffect(() => {
    floatIcon();
  }, []);

  const adviceStyles = getAdviceStyles(advice);
  const adviceIcon: IconName =
    advice === 'Buy'
      ? 'arrow-trend-up'
      : advice === 'Sell'
      ? 'arrow-trend-down'
      : 'mug-hot';
  const adviceIconColor =
    advice === 'Buy'
      ? theme.colors.green
      : advice === 'Sell'
      ? theme.colors.red
      : theme.colors.base200;

  return (
    <View style={styles.container}>
      {advice && (
        <View style={styles.adviceText}>
          <Animated.View style={styles.iconContainer}>
            <FontAwesomeIcon
              icon={adviceIcon}
              size={36}
              color={adviceIconColor}
            />
          </Animated.View>
          <Text>
            The advice for this current situation would be to{' '}
            <Text style={adviceStyles}>{advice}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default RecommendationBox;
