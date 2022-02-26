import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
// import App from './components/App';
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { counterReducer } from "./redux/reducer"

import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from './context/auth';
import "bootstrap/dist/css/bootstrap.min.css"
let store = createStore(counterReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
