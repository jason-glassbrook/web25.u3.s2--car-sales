import React from 'react';
import * as ReactRedux from 'react-redux';

/**************************************/

const mapStateToProps = (state) => ({
  car : state.car,
});

const mapDispatchToProps = ({});

const connectHeader = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

/**************************************/

export default connectHeader (Header);
