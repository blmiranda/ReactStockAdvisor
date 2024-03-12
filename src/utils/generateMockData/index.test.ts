import { Stocks } from '../../global/types/stocks.types';

import generateMockData from './';

describe('generateMockData', () => {
  it('should return an array of stock objects', async () => {
    const stocks: Stocks = await generateMockData('AAPL', 1);

    expect(Array.isArray(stocks)).toBe(true);

    expect(stocks.length).toBeGreaterThan(0);

    expect(stocks[0]).toEqual(
      expect.objectContaining({
        symbol: expect.any(String),
        date: expect.any(String),
        price: expect.any(String),
        socialMediaCount: expect.any(Number),
      })
    );
  });
});
