import { Stocks } from '../../global/types/stocks.types';

import { trendBasedStrategy } from '../../core/recommendationStrategies';
import { TrendBasedConfig } from '../../global/types/strategiesConfigs.types';
import { Recommendation } from '../../core/recommendationStrategies/trendBasedStategy/types';

function getRecommendation(
  stocks: Stocks,
  config: TrendBasedConfig
): Recommendation {
  return trendBasedStrategy(stocks, config);
}

export default getRecommendation;
