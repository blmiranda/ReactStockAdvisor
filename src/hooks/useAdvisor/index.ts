import { useContext } from 'react';

import { AdvisorContextObject } from '../../global/types/advisorContextObject.types';

import AdvisorContext from '../../contexts/AdvisorContext';

function useAdvisor(): AdvisorContextObject {
  const context = useContext(AdvisorContext);

  return context;
}

export default useAdvisor;
