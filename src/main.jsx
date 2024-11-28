import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import StoreProvider from './redux/store/index.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <StoreProvider>
         <App />
      </StoreProvider>
   </StrictMode>
);
