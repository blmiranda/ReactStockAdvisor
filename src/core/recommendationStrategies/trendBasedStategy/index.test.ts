import { Stocks } from '../../../global/types/stocks.types';
import { TrendBasedConfig } from '../../../global/types/strategiesConfigs.types';

import trendBasedStrategy from './';

describe('trendBasedStrategy', () => {
  it('should recommend Buy when price and social media trends are above thresholds', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: {
          facebook: 25,
          instagram: 25,
          twitter: 25,
          tiktok: 25,
        },
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '110.00',
        socialMediaCount: {
          facebook: 25,
          instagram: 25,
          twitter: 50,
          tiktok: 30,
        },
      },
    ];

    const config: TrendBasedConfig = {
      socialMediaServices: ['facebook', 'instagram', 'twitter', 'tiktok'],
    };

    expect(trendBasedStrategy(stocks, config)).toBe('Buy');
  });

  it('should recommend Sell when price and social media trends are below thresholds', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: {
          facebook: 25,
          instagram: 25,
          twitter: 25,
          tiktok: 25,
        },
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '90.00',
        socialMediaCount: {
          facebook: 20,
          instagram: 20,
          twitter: 20,
          tiktok: 10,
        },
      },
    ];

    const config: TrendBasedConfig = {
      socialMediaServices: ['facebook', 'instagram', 'twitter', 'tiktok'],
    };

    expect(trendBasedStrategy(stocks, config)).toBe('Sell');
  });

  it('should recommend Hold when trends do not meet Buy or Sell criteria', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: {
          facebook: 25,
          instagram: 25,
          twitter: 25,
          tiktok: 25,
        },
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '102.00',
        socialMediaCount: {
          facebook: 25,
          instagram: 25,
          twitter: 25,
          tiktok: 35,
        },
      },
    ];

    const config: TrendBasedConfig = {
      socialMediaServices: ['facebook', 'instagram', 'twitter', 'tiktok'],
    };

    expect(trendBasedStrategy(stocks, config)).toBe('Hold');
  });
});
