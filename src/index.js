import React, { Provider } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//stores
import { optionsStore } from "./store/options-store";

const stores = {
  options: optionsStore
}


ReactDOM.render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
