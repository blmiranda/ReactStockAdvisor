import { Stocks } from '../../global/types/stocks.types';
import { TrendBasedConfig } from '../../global/types/strategiesConfigs.types';

import getRecommendation from './';
import * as recommendationStrategies from '../../core/recommendationStrategies';

jest.mock('../../core/recommendationStrategies');

describe('getRecommendation', () => {
  it('calls a strategy function within recommendationStrategies', () => {
    const mockStocks: Stocks = [
      {
        symbol: 'AAPL',
        icon: ['fab', 'apple'],
        date: '2024-03-12',
        price: '100',
        socialMediaCount: {
          facebook: 1,
          instagram: 1,
          twitter: 1,
          tiktok: 1,
        },
      },
    ];

    const config: TrendBasedConfig = {
      socialMediaServices: ['facebook', 'instagram', 'twitter', 'tiktok'],
    };

    const spy = jest.spyOn(recommendationStrategies, 'trendBasedStrategy');

    getRecommendation(mockStocks, config);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
