import { Props } from './types.ts';
import { AdvisorContextObject } from '../../global/types/advisorContextObject.types.ts';
import { StockTickerOptions } from '../../global/types/stockOptions.types.ts';
import { TimeWindow } from '../../global/types/timeWindowOptions.types.ts';
import { Stocks } from '../../global/types/stocks.types.ts';
import { TrendBasedConfig } from '../../global/types/strategiesConfigs.types.ts';
import { Recommendation } from '../../core/recommendationStrategies/trendBasedStategy/types.ts';

import AdvisorContext from '../../contexts/AdvisorContext';
import fetchData from '../../services/fetchData/index.ts';
import getRecommendation from '../../utils/getRecommendation/index.ts';
import { useState } from 'react';

const AdvisorProvider = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState<Stocks | null>(null);
  const [advice, setAdvice] = useState<Recommendation | null>(null);

  async function getStocks(
    symbol: StockTickerOptions,
    days: TimeWindow
  ): Promise<void> {
    try {
      setLoading(true);

      const data: Stocks = await fetchData(symbol, days, {
        useMockData: true,
      });

      setStocks(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('An unknown error ocurred');
    } finally {
      setLoading(false);
    }
  }

  function getAdvice(stocks: Stocks | null, config: TrendBasedConfig): void {
    if (stocks) {
      const adviceString: Recommendation = getRecommendation(stocks, config);
      setAdvice(adviceString);
    }
  }

  const value: AdvisorContextObject = {
    loading: loading,
    getStocks: getStocks,
    getAdvice: getAdvice,
    stocks: stocks,
    advice: advice,
  };

  return (
    <AdvisorContext.Provider value={value}>{children}</AdvisorContext.Provider>
  );
};
export default AdvisorProvider;
