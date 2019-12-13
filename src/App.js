import React from 'react';
import * as ReactRedux from 'react-redux';

import car from 'states/car';

import Header from 'components/Header';
import AddedFeatures from 'components/AddedFeatures';
import AdditionalFeatures from 'components/AdditionalFeatures';
import Total from 'components/Total';

const App = () => {
  const [ state, dispatch ] = React.useReducer (car.reducer, car.init);
  // const send = car.actions.makers (dispatch);

  // const addFeature = (item) => send.ADD_FEATURE (item);
  // const removeFeature = (item) => send.REMOVE_FEATURE (item);

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
});

export default (
  ReactRedux.connect (
    mapStateToProps, {}
  ) (
    App
  )
);
