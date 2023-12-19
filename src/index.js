import React from 'react';
import ReactDOM from 'react-dom/client';
import counterStore from './store';

import './index.css';
import App from './App';
import { Provider } from 'mobx-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider counterStore={counterStore}><App /></Provider>);
