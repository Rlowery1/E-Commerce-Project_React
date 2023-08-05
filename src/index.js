import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './utils/App';

const root = document.getElementById('root');
if (root !== null) {
    ReactDOM.createRoot(root).render(<App />);
}
