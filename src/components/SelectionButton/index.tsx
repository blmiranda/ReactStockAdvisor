import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../global/styles/theme/index.ts';
import styles from './styles.ts';

import { Props } from './types.ts';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

const SelectionButton = ({
  onPress,
  item,
  buttonType,
  activeSelection,
}: Props): JSX.Element => {
  const [buttonIsSelected, setButtonIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(activeSelection)) {
      const isSelected = activeSelection.some((selection) => {
        if (buttonType === 'symbol' && selection === item) {
          return true;
        }
        if (buttonType === 'socialMedia' && selection === item) {
          return true;
        }
        if (buttonType === 'timeWindow' && selection === item) {
          return true;
        }
        return false;
      });

      setButtonIsSelected(isSelected);
    }
  }, [activeSelection]);

  const icon: IconName | IconProp =
    buttonType === 'timeWindow' ? item.icon : ['fab', item.icon];

  return (
    <Pressable
      style={[styles.container, buttonIsSelected && styles.buttonSelected]}
      onPress={onPress}
    >
      <FontAwesomeIcon icon={icon} size={12} color={theme.colors.base300} />
      <Text style={styles.text}>{item?.name}</Text>
    </Pressable>
  );
};

export default SelectionButton;
