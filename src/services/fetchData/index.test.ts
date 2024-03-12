import generateMockData from '../../utils/generateMockData';
import fetchStocks from '../../api/fetchStocks';
import fetchData from './';

import { Stocks } from '../../global/types/stocks.types';

jest.mock('../../utils/generateMockData');
jest.mock('../../api/fetchStocks');

const mockGenerateMockData = generateMockData as jest.Mock<
  ReturnType<typeof generateMockData>
>;
const mockFetchStocks = fetchStocks as jest.Mock<
  ReturnType<typeof fetchStocks>
>;

describe('fetchData', () => {
  it('should fetch mock data when useMockData is true', async () => {
    const mockData: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: {
          facebook: 1,
          instagram: 1,
          twitter: 1,
          tiktok: 1,
        },
      },
    ];
    mockGenerateMockData.mockResolvedValue(mockData);

    const stocks: Stocks = await fetchData('AAPL', 1, { useMockData: true });

    expect(mockGenerateMockData).toHaveBeenCalledWith('AAPL', 1);
    expect(stocks).toEqual(mockData);
  });

  it('should fetch real data when useMockData is false', async () => {
    const realData: Stocks = [
      {
        symbol: 'AAPL',
        date: '2024-03-10',
        price: '100.00',
        socialMediaCount: {
          facebook: 1,
          instagram: 1,
          twitter: 1,
          tiktok: 1,
        },
      },
    ];
    mockFetchStocks.mockResolvedValue(realData);

    const stocks: Stocks = await fetchData('AAPL', 1, { useMockData: false });

    expect(mockFetchStocks).toHaveBeenCalledWith('AAPL', 1);
    expect(stocks).toEqual(realData);
  });

  it('handles errors from generateMockData', async () => {
    const errorMessage = 'Error generating mock data';
    mockGenerateMockData.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData('AAPL', 1, { useMockData: true })).rejects.toThrow(
      errorMessage
    );
  });

  it('handles errors from fetchStocks', async () => {
    const errorMessage = 'An unknown error ocurred';
    mockFetchStocks.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData('AAPL', 1, { useMockData: false })).rejects.toThrow(
      errorMessage
    );
  });
});
