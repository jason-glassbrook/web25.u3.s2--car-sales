import React from 'react';
import * as ReactRedux from 'react-redux';

/**************************************/

const mapStateToProps = ({ car, ...state }) => ({
  car,
});

const mapDispatchToProps = ({});

const connectHeader = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps
);

/**************************************/

const Header = ({ car, ...props }) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

/**************************************/

export default connectHeader (Header);
