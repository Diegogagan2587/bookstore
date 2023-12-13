// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Componentes and files
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/bookstore">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
