import React from 'react';
import ReactDOM from 'react-dom/client';

// package
import { BrowserRouter as Router } from 'react-router-dom';

// redux provider
import { Provider } from 'react-redux';

// style
import './index.css';

// component
import App from './App';

// redux store
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
