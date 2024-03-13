import { Animated } from 'react-native';

export const translateY = new Animated.Value(0);

export function floatIcon() {
  const duration = 600;
  const floatUpValue = -7;
  const floatDownValue = 0;

  Animated.loop(
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: floatUpValue,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: floatDownValue,
        duration: duration,
        useNativeDriver: true,
      }),
    ]),
    {
      iterations: -1,
    }
  ).start();
}
