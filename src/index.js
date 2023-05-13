import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './modules';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
   reducer: rootReducer,  // 스토어를 만듭니다.
   middleware:[ReduxThunk, logger]  //middleware를 등록합니다.
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    
   
  </React.StrictMode>
);

