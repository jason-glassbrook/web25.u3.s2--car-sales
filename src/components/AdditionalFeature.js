import React from 'react';
import * as ReactRedux from 'react-redux';

import car from 'states/car';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => ({
});

export default (
  ReactRedux.connect (
    mapStateToProps, {}
  ) (
    AdditionalFeature
  )
);
