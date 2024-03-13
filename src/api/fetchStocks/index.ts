import { isAxiosError } from 'axios';

import { Stocks } from '../../global/types/stocks.types';

import handleAxiosError from '../../utils/handleAxiosError';
import { StockTickerOptions } from '../../global/types/stockOptions.types';

async function fetchStocks(
  symbol: StockTickerOptions,
  days: number
): Promise<Stocks> {
  try {
    // fetch the real data here

    const stocks: Stocks = [
      {
        symbol: 'AAPL',
        date: 'example',
        price: '1.00',
        socialMediaCount: {
          facebook: 1,
          instagram: 1,
          twitter: 1,
          tiktok: 1,
        },
      },
    ];

    return stocks;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error ocurred');
    }
  }
}

export default fetchStocks;
