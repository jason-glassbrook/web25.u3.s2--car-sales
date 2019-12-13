import React from 'react';
import * as ReactRedux from 'react-redux';

import car from 'states/car';
import AddedFeature from './AddedFeature';

/**************************************/

const mapStateToProps = ({ car, ...state }) => ({
  car,
});

const mapDispatchToProps = ({
  removeFeature : car.actions.makers.REMOVE_FEATURE,
});

const connectAddedFeatures = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const AddedFeatures = ({ car, removeFeature, ...props }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

/**************************************/

export default connectAddedFeatures (AddedFeatures);
