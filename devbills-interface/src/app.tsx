import { AppProvider } from './hooks';
import { Home } from './Screens/home';

import GlobalStyles from './styles/globalStyles';

export function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
}
