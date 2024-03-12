import { Stocks } from '../../global/types/stocks.types';

const PRICE_CHANGE_THRESHOLD_BUY = 0.05;
const PRICE_CHANGE_THRESHOLD_SELL = -0.05;
const SOCIAL_MEDIA_TREND_THRESHOLD_BUY = 0.2;
const SOCIAL_MEDIA_TREND_THRESHOLD_SELL = -0.2;

function calculatePriceChange(stocks: Stocks): number {
  const initialPrice: number = parseFloat(stocks[0].price);
  const finalPrice: number = parseFloat(stocks[stocks.length - 1].price);
  return (finalPrice - initialPrice) / initialPrice;
}

function calculateSocialMediaTrend(stocks: Stocks): number {
  const initialCount: number = stocks[0].socialMediaCount;
  const finalCount: number = stocks[stocks.length - 1].socialMediaCount;
  return (finalCount - initialCount) / initialCount;
}

function getRecommendation(stocks: Stocks): string {
  const priceChange: number = calculatePriceChange(stocks);
  const socialMediaTrend: number = calculateSocialMediaTrend(stocks);

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

export default getRecommendation;
