import { View, Text, FlatList } from 'react-native';

import { Props } from './types.ts';

import styles from './styles';

import StockInfo from '../StockInfo/index.tsx';

const StocksInfoList = ({ stocks }: Props): JSX.Element => {
  return (
    <FlatList
      data={stocks}
      keyExtractor={(item) => item.date}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <StockInfo item={item} />}
    />
  );
};

export default StocksInfoList;
