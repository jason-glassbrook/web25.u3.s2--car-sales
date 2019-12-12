/// tools ///
import hi from 'tools/hi';
import iffy from 'tools/iffy';
import immutably from 'tools/immutably';
import nullably from 'tools/nullably';

/**************************************/

/*--------------------------------------
  init - initial values
--------------------------------------*/
export const init = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

/*--------------------------------------
  actions
  .make - fun to make an action obj
  .names - list of action names (types)
  .senders - funs to send (dispatch) action objs
--------------------------------------*/
export const actions = {};

actions.make = (type, data) => {
  // /* DEV */ console.log ({ type, data });
  return ({ type, data });
};

actions.names = [
  'ADD_FEATURE',
  'REMOVE_FEATURE',
];

actions.senders = (dispatch) => Object.fromEntries (
  actions.names.map ((name) => [
    name, (...args) => dispatch (actions.make (name, ...args))
  ])
);

/*--------------------------------------
  reducer
--------------------------------------*/
export const reducer = (state = init, { type, data }) => {
  ///>>> add any helper funs <<<///

  /// do it! ///
  try {
    /// actions ///
    switch (type) {
      case 'ADD_FEATURE' :
        hi.flag ('log', 'adding feature to car');
        return (state);
      case 'REMOVE_FEATURE' :
        hi.flag ('log', 'removing feature from car');
        return (state);
      // else
      default :
        hi.flag ('warn', 'action not defined');
        console.log ('type :', type);
        return (state);
    };
  }
  catch (error) {
    hi.flag ('error', 'something bad happened');
    console.error (error);
  }
};

/**************************************/

export default {
  init,
  actions,
  reducer,
};
