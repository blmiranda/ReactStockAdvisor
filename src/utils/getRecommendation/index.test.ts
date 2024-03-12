import { Stocks } from '../../global/types/stocks.types';
import getRecommendation from './';

describe('getRecommendation', () => {
  it('should recommend Buy when price and social media trends are above thresholds', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: 100,
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '110.00',
        socialMediaCount: 130,
      },
    ];

    expect(getRecommendation(stocks)).toBe('Buy');
  });

  it('should recommend Sell when price and social media trends are below thresholds', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: 100,
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '90.00',
        socialMediaCount: 70,
      },
    ];

    expect(getRecommendation(stocks)).toBe('Sell');
  });

  it('should recommend Hold when trends do not meet Buy or Sell criteria', () => {
    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: 100,
      },
      {
        symbol: 'MSFT',
        date: '2024-03-11',
        price: '102.00',
        socialMediaCount: 110,
      },
    ];

    expect(getRecommendation(stocks)).toBe('Hold');
  });
});
