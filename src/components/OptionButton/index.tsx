import { useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../global/styles/theme';
import styles from './styles';

import { Props } from './types';
import { SelectionListOptionObject } from '../../global/types/selectionListOptions.types';

import optionButtonConfigsMap from '../../utils/optionButtonConfigsMap';
import stockOptions from '../../utils/stockOptions';
import socialMediaOptions from '../../utils/socialMediaOptions';
import timeWindowOptions from '../../utils/timeWindowOptions';

const OptionButton = ({
  onPress,
  buttonType,
  selectedItem,
}: Props): JSX.Element => {
  const buttonConfig = optionButtonConfigsMap[buttonType];

  const rotateValue = useRef(new Animated.Value(0)).current;

  function startRotation() {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }

  const rotationInterpolation = rotateValue.interpolate({
    inputRange: [0, 1], // Interpolate between 0 and 1
    outputRange: ['0deg', '180deg'], // Corresponding degrees of rotation
  });

  function handleOptions(): void {
    startRotation();

    const option: SelectionListOptionObject = {
      currentType: buttonType,
      data: {
        symbol: stockOptions,
        socialMedia: socialMediaOptions,
        timeWindow: timeWindowOptions,
      },
    };
    onPress(option);
  }

  function renderSelectedItem(): JSX.Element {
    if (buttonType === 'symbol' && Array.isArray(selectedItem)) {
      return (
        <View>
          {selectedItem.map((item) => (
            <Text style={styles.text} key={item.icon}>
              {item.value}
            </Text>
          ))}
        </View>
      );
    }

    if (buttonType === 'socialMedia' && Array.isArray(selectedItem)) {
      return (
        <View style={styles.arrayOfSocials}>
          {selectedItem.map((item) => (
            <FontAwesomeIcon
              key={item.value}
              icon={['fab', item.icon]}
              size={12}
              color={theme.colors.base300}
            />
          ))}
        </View>
      );
    }

    if (buttonType === 'timeWindow' && Array.isArray(selectedItem)) {
      return (
        <View>
          {selectedItem.map((item) => (
            <Text style={styles.text} key={item.icon}>
              {item.name}
            </Text>
          ))}
        </View>
      );
    }

    if (buttonType === 'timeWindow' && Array.isArray(selectedItem)) {
      return (
        <View style={styles.arrayOfSocials}>
          {selectedItem.map((item) => (
            <FontAwesomeIcon
              key={item.value}
              icon={['fab', item.icon]}
              size={12}
              color={theme.colors.base300}
            />
          ))}
        </View>
      );
    }

    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <FontAwesomeIcon
          icon={buttonConfig.icon}
          color={theme.colors.base200}
          size={12}
        />
        <Text style={styles.label}>{buttonConfig.name}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleOptions}
      >
        {selectedItem ? (
          renderSelectedItem()
        ) : (
          <Animated.View
            style={{ transform: [{ rotate: rotationInterpolation }] }}
          >
            <FontAwesomeIcon
              icon="plus"
              size={12}
              color={theme.colors.base300}
            />
          </Animated.View>
        )}
      </Pressable>
    </View>
  );
};

export default OptionButton;
