import { AppProvider } from './hooks';
import { Home } from './pages/home';

import GlobalStyles from './styles/globalStyles';

export function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
}
