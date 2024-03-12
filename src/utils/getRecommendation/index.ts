import { Stocks } from '../../global/types/stocks.types';

import { trendBasedStrategy } from '../../core/recommendationStrategies';
import { TrendBasedConfig } from '../../global/types/strategiesConfigs.types';

function getRecommendation(stocks: Stocks, config: TrendBasedConfig) {
  return trendBasedStrategy(stocks, config);
}

export default getRecommendation;
