import React from 'react';
import ReactDOM from 'react-dom/client';

import { Pages } from './pages';
import { app } from './firebase'

import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages app={app()} />
  </React.StrictMode>
);