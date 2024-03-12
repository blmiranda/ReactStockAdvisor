import { Stocks } from '../../global/types/stocks.types';

import getRecommendation from './';
import * as recommendationStrategies from '../../recommendationStrategies/';

jest.mock('../../recommendationStrategies');

describe('getRecommendation', () => {
  it('calls a strategy function within recommendationStrategies', () => {
    const mockStocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-12',
        price: '100',
        socialMediaCount: 100,
      },
    ];

    const spy = jest.spyOn(recommendationStrategies, 'trendBasedStrategy');

    getRecommendation(mockStocks);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
