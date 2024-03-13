import { Stocks } from '../../../global/types/stocks.types';
import { Recommendation } from './types';
import {
  SocialMediaKeys,
  TrendBasedConfig,
} from '../../../global/types/strategiesConfigs.types';

const PRICE_CHANGE_THRESHOLD_BUY = 0.05;
const PRICE_CHANGE_THRESHOLD_SELL = -0.05;
const SOCIAL_MEDIA_TREND_THRESHOLD_BUY = 0.2;
const SOCIAL_MEDIA_TREND_THRESHOLD_SELL = -0.2;

function calculatePriceChange(stocks: Stocks): number {
  const initialPrice: number = parseFloat(stocks[0].price);
  const finalPrice: number = parseFloat(stocks[stocks.length - 1].price);
  return (finalPrice - initialPrice) / initialPrice;
}

function calculateSocialMediaTrend(
  stocks: Stocks,
  socialMediaServices: Array<SocialMediaKeys>
): number {
  let initialTotalCount: number = 0;
  let finalTotalCount: number = 0;

  socialMediaServices.forEach((service) => {
    const initialCount: number = stocks[0].socialMediaCount[service];
    const finalCount: number =
      stocks[stocks.length - 1].socialMediaCount[service];

    initialTotalCount += initialCount;
    finalTotalCount += finalCount;
  });

  return (finalTotalCount - initialTotalCount) / initialTotalCount;
}

function trendBasedStrategy(
  stocks: Stocks,
  config: TrendBasedConfig
): Recommendation {
  const priceChange: number = calculatePriceChange(stocks);
  const socialMediaTrend: number = calculateSocialMediaTrend(
    stocks,
    config.socialMediaServices
  );

  if (
    priceChange > PRICE_CHANGE_THRESHOLD_BUY &&
    socialMediaTrend > SOCIAL_MEDIA_TREND_THRESHOLD_BUY
  ) {
    return 'Buy';
  } else if (
    priceChange < PRICE_CHANGE_THRESHOLD_SELL &&
    socialMediaTrend < SOCIAL_MEDIA_TREND_THRESHOLD_SELL
  ) {
    return 'Sell';
  } else {
    return 'Hold';
  }
}

export default trendBasedStrategy;
