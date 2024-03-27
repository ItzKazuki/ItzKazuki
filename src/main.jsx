import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/input.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import BottomNav from './components/BottomNav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <App />  
    </BrowserRouter>
  </React.StrictMode>,
)
