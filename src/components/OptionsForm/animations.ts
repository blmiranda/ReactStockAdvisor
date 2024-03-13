import { Animated } from 'react-native';

export const translateY = new Animated.Value(-50);

export function hideSelectionOptions() {
  Animated.timing(translateY, {
    toValue: -50,
    duration: 300,
    useNativeDriver: true,
  }).start();
}

export function showSelectionOptions() {
  Animated.timing(translateY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start();
}
