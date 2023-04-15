import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import shelfTrackerSlice from './slices/shelfTracker';

// //store -> globalized state

const store = configureStore({ reducer: shelfTrackerSlice });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
