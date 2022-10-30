import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
