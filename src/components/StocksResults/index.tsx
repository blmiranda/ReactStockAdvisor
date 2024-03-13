import { useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles.ts';

import useAdvisor from '../../hooks/useAdvisor';

import Empty from '../Empty';
import RecommendationBox from '../RecommendationBox/index.tsx';
import StocksInfoList from '../StocksInfoList/index.tsx';

const StocksResults = (): JSX.Element => {
  const { stocks, getAdvice, loading } = useAdvisor();

  useEffect(() => {
    getAdvice(stocks, { socialMediaServices: ['tiktok', 'instagram'] });
  }, [stocks]);

  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView
          source={require('../../assets/animations/loading.json')}
          style={styles.loading}
          autoPlay
          loop
        />
      ) : stocks ? (
        <View style={styles.resultsContainer}>
          <RecommendationBox />
          <StocksInfoList stocks={stocks} />
        </View>
      ) : (
        <Empty />
      )}
    </View>
  );
};

export default StocksResults;
