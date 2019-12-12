/// tools ///
import hi from 'tools/hi';
import iffy from 'tools/iffy';
import immutably from 'tools/immutably';
import nullably from 'tools/nullably'

/**************************************/

/*--------------------------------------
  init - initial values
--------------------------------------*/
export const init = {
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
  'ADD_FEATURE_TO_CAR',
  'REMOVE_FEATURE_FROM_CAR',
];

actions.senders = (dispatch) => Object.fromEntries (
  actions.names.map ((name) => [
    name, (...args) => dispatch (actions.make (name, ...args))
  ])
);

/*--------------------------------------
  reducer
--------------------------------------*/
export const reducer = (state, { type, data }) => {
  ///>>> add any helper funs <<<///

  /// do it! ///
  try {
    /// actions ///
    switch (type) {
      case 'ADD_FEATURE_TO_CAR' :
        hi.flag ('log', 'adding feature to car');
        return (state);
      case 'REMOVE_FEATURE_FROM_CAR' :
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
