import { Stocks } from '../../global/types/stocks.types';

async function generateMockData(symbol: string, days: number): Promise<Stocks> {
  const today: Date = new Date();
  const data: Stocks = [];

  for (let i = 0; i < days; i++) {
    today.setDate(today.getDate() - i);

    const date: string = today.toISOString().split('T')[0];
    const price: number = Math.random() * 100 + 50;
    const socialMediaCount: number = Math.floor(Math.random() * 500 + 1);

    data.push({
      symbol: symbol,
      date: date,
      price: price.toFixed(2),
      socialMediaCount: socialMediaCount,
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.reverse());
    }, 1000);
  });
}

export default generateMockData;
