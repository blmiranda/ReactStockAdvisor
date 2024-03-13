import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../global/styles/theme';
import styles from './styles.ts';

const Empty = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        size={90}
        icon="magnifying-glass"
        color={theme.colors.base200}
      />
      <Text style={styles.text}>Use the filters to get results</Text>
    </View>
  );
};

export default Empty;
