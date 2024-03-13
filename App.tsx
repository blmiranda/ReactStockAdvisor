import './src/services/fontAwesome/';

import AdvisorProvider from './src/providers/AdvisorProvider';
import Routes from './src/routes';

const App = (): JSX.Element => {
  return (
    <AdvisorProvider>
      <Routes />
    </AdvisorProvider>
  );
};

export default App;
