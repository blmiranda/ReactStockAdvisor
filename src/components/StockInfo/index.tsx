import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import theme from '../../global/styles/theme/index.ts';
import styles from './styles.ts';

import { Props } from './types.ts';
import { StockTickerOptions } from '../../global/types/stockOptions.types.ts';

import stockIconsMap from '../../utils/stockIconsMap/index.ts';

const StockInfo = ({ item }: Props): JSX.Element => {
  const icon: IconProp = stockIconsMap[item.symbol as StockTickerOptions];

  return (
    <View style={styles.container}>
      <View style={styles.stockInfoContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} size={36} color={theme.colors.base300} />
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
