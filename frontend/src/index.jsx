import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavouritesContextProvider } from './store/favourites-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesContextProvider>
  </React.StrictMode>,
);
