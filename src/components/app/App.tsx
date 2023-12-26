import ThemeProvider from 'react-bootstrap/ThemeProvider';

import AppRoutes from '../../app-routes/AppRoutes';

function App() {
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
