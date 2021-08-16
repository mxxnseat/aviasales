import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import App from './App';

//stores
import optionsStore from "./store/options-store";
import ticketsStore from './store/tickets-store';

const stores = {
  options: optionsStore,
  tickets: ticketsStore
}



ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
  document.getElementById('root')
);
