import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteContentProvider } from './pages/store/favourite_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavouriteContentProvider>
    <BrowserRouter> <App /></BrowserRouter></FavouriteContentProvider>
);
