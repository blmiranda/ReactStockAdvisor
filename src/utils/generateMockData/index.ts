import { Stocks } from '../../global/types/stocks.types';
import { StockTickerOptions } from '../../global/types/stockOptions.types';

async function generateMockData(
  symbol: StockTickerOptions,
  days: number
): Promise<Stocks> {
  const data: Stocks = [];

  for (let i = 0; i < days; i++) {
    const today: Date = new Date();
    today.setDate(today.getDate() - i);

    const date: string = today.toISOString().split('T')[0];
    const price: number = Math.random() * 100 + 50;
    const facebookMediaCount: number = Math.floor(Math.random() * 500 + 1);
    const instagramMediaCount: number = Math.floor(Math.random() * 500 + 1);
    const twitterMediaCount: number = Math.floor(Math.random() * 500 + 1);
    const tiktokMediaCount: number = Math.floor(Math.random() * 500 + 1);

    data.push({
      symbol: symbol,
      date: date,
      price: price.toFixed(2),
      socialMediaCount: {
        facebook: facebookMediaCount,
        instagram: instagramMediaCount,
        twitter: twitterMediaCount,
        tiktok: tiktokMediaCount,
      },
    });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Error generating mock data'));
      }
    }, 1000);
  });
}

export default generateMockData;
