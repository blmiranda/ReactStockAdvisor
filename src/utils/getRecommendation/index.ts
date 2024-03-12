import { Stocks } from '../../global/types/stocks.types';

import { trendBasedStrategy } from '../../core/recommendationStrategies';

function getRecommendation(stocks: Stocks) {
  return trendBasedStrategy(stocks);
}

export default getRecommendation;
