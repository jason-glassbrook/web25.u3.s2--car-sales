import React from 'react';
import * as ReactRedux from 'react-redux';

import car from 'states/car';
import AdditionalFeature from './AdditionalFeature';

/**************************************/

const mapStateToProps = ({ additionalFeatures, ...state }) => ({
  additionalFeatures,
});

const mapDispatchToProps = ({});

const connectAdditionalFeatures = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const AdditionalFeatures = ({ additionalFeatures, ...props }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connectAdditionalFeatures (AdditionalFeatures);
