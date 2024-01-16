import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { BASE_NAME } from './utils/constants.ts';
import App from './components/app/App.tsx';

import { store } from './store';

import './styles-global/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASE_NAME}>
    <AnimatePresence mode="wait">
      <Provider store={store}>
        <App />
      </Provider>
    </AnimatePresence>
  </BrowserRouter>,
);
