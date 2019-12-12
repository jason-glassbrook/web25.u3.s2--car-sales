import React from 'react';
import * as ReactRedux from 'react-ReactRedux';

import car from 'reducers/car';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => ({
});

export default (
  ReactRedux.connect (
    mapStateToProps, {}
  ) (
    AddedFeature
  )
);
