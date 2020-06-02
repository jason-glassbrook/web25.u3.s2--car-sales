import React from 'react';
import * as ReactRedux from 'react-redux';

/**************************************/

const mapStateToProps = ({ car, additionalPrice, ...state }) => ({
  car, additionalPrice,
});

const mapDispatchToProps = ({});

const connectTotal = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const Total = ({ car, additionalPrice, ...props }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

/**************************************/

export default connectTotal (Total);
