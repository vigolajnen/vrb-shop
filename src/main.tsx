import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

import { BASE_NAME } from './utils/constants.ts';
import App from './components/app/App.tsx';

// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles-global/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASE_NAME}>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </BrowserRouter>,
);
