import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-ReactRedux';

import car from 'reducers/car';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const carStore = ReactRedux.createStore (car.reducer);

ReactDOM.render (
  <ReactRedux.Provider store={carStore}>
    <App/>
  </ReactRedux.Provider>,
  document.getElementById ('root')
);
