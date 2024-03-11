import { Stocks } from '../../global/types/stocks.types';

async function fetchStocks(symbol: string, days: number): Promise<Stocks> {
  // fetch the real data here

  const stocks: Stocks = [
    {
      symbol: 'example',
      date: 'example',
      price: 1,
      socialMediaCount: 1,
    },
  ];
  return stocks;
}

export default fetchStocks;
