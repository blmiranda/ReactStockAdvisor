import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../global/styles/theme';

import styles from './styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon="money-bill-trend-up"
        color={theme.colors.base300}
        size={26}
      />
    </View>
  );
};

export default Header;
