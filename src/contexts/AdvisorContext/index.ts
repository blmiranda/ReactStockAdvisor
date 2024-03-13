import { createContext } from 'react';

import { AdvisorContextObject } from '../../global/types/advisorContextObject.types';

const AdvisorContext = createContext<AdvisorContextObject>({
  loading: false,
  getStocks: async () => {},
  getAdvice: () => {},
  stocks: null,
  advice: null,
});

export default AdvisorContext;
