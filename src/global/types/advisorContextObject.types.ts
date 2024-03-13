import { Recommendation } from '../../core/recommendationStrategies/trendBasedStategy/types';
import { StockTickerOptions } from './stockOptions.types';
import { Stocks } from './stocks.types';
import { TrendBasedConfig } from './strategiesConfigs.types';
import { TimeWindow } from './timeWindowOptions.types';

export interface AdvisorContextObject {
  loading: boolean;
  getStocks: (symbol: StockTickerOptions, days: TimeWindow) => Promise<void>;
  getAdvice: (stocks: Stocks | null, config: TrendBasedConfig) => void;
  stocks: Stocks | null;
  advice: Recommendation | null;
}
