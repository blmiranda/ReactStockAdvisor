import { Stocks } from '../../global/types/stocks.types';

import generateMockData from '../../utils/generateMockData';
import fetchStocks from '../../api/fetchStocks';
import { StockTickerOptions } from '../../global/types/stockOptions.types';

async function fetchData(
  symbol: StockTickerOptions,
  days: number,
  config: { useMockData: boolean }
): Promise<Stocks> {
  if (config.useMockData) {
    try {
      const data: Stocks = await generateMockData(symbol, days);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
      throw new Error('An unknown error ocurred');
    }
  } else {
    try {
      const data: Stocks = await fetchStocks(symbol, days);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
      throw new Error('An unknown error ocurred');
    }
  }
}

export default fetchData;
