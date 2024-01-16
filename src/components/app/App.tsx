import ThemeProvider from 'react-bootstrap/ThemeProvider';

import AppRoutes from '../../app-routes/AppRoutes';
import { useGetCitiesQuery } from '../../store/slices/citiesSlice';

function App() {
  const {} = useGetCitiesQuery('', {
    refetchOnFocus: true,
    pollingInterval: 36000000,
  });

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
