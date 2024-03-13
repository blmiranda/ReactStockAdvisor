import { View, Text } from 'react-native';

import styles from './styles.ts';

import { Props } from './types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from '../../global/styles/theme/index.ts';

const StockInfo = ({ item }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.stockInfoContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={item.icon}
            size={36}
            color={theme.colors.base300}
          />
        </View>

        <View style={styles.stockInfoTestContainer}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default StockInfo;
