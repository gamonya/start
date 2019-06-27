import React from 'react';
import  ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from "./store"

const store = configureStore(undefined)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
 ,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
