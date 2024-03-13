import { createContext } from 'react';

import { AdvisorContextObject } from '../../global/types/advisorContextObject.types';

const AdvisorContext = createContext<AdvisorContextObject>({
  loading: false,
  getStocks: async () => {},
  getAdvice: () => {},
  stocks: null,
  setStocks: () => {},
  advice: null,
});

export default AdvisorContext;
