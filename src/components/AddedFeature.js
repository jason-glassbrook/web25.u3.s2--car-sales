import React from 'react';
import * as Redux from 'react-redux';

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
  Redux.connect (
    mapStateToProps, {}
  ) (
    AddedFeature
  )
);
