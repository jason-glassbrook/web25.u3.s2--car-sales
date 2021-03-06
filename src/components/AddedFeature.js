import React from 'react';

const AddedFeature = ({ feature, removeFeature, props }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
      className="button"
      onClick={() => removeFeature (feature)}
      >X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
