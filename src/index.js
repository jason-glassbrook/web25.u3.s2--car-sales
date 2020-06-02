import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';

import car from 'states/car';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

ReactDOM.render (
  <ReactRedux.Provider store={car.store}>
    <App/>
  </ReactRedux.Provider>,
  document.getElementById ('root')
);
