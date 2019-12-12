import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'react-redux';

import car from 'reducers/car';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const carStore = Redux.createStore (car.reducer);

ReactDOM.render (
  <Redux.Provider store={carStore}>
    <App/>
  </Redux.Provider>,
  document.getElementById ('root')
);
