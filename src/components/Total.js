import React from 'react';
import * as ReactRedux from 'react-redux';

/**************************************/

const mapStateToProps = (state) => ({
  car : state.car,
  additionalPrice : state.additionalPrice,
});

const mapDispatchToProps = ({});

const connectTotal = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

/**************************************/

export default connectTotal (Total);
