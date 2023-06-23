
import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      <ToastContainer />
    </React.StrictMode>
);


reportWebVitals();
