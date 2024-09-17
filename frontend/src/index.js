import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store'; // Adjust the import path according to your project structure

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
