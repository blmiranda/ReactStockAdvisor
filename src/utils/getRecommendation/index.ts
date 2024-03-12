import { Stocks } from '../../global/types/stocks.types';

import { trendBasedStrategy } from '../../recommendationStrategies';

function getRecommendation(stocks: Stocks) {
  return trendBasedStrategy(stocks);
}

export default getRecommendation;
