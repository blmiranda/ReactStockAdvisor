import { Stocks } from '../../global/types/stocks.types';

import generateMockData from '../../utils/generateMockData';
import fetchStocks from '../../api/fetchStocks';

const useMockData: boolean = true;

async function fetchData(symbol: string, days: number): Promise<Stocks> {
  if (useMockData) {
    try {
      const data: Stocks = await generateMockData(symbol, days);
      return data;
    } catch (error) {
      // handle error here
      throw error;
    }
  } else {
    try {
      const data: Stocks = await fetchStocks(symbol, days);
      return data;
    } catch (error) {
      // handle error here
      throw error;
    }
  }
}

export default fetchData;
