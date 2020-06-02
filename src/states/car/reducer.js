/// tools ///
import hi from 'tools/hi';
// import iffy from 'tools/iffy';
// import immutably from 'tools/immutably';
// import nullably from 'tools/nullably';

/// internal modules ///
import initState from './init'
import { types } from './actions';

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initState, action) => {
  const { type, data } = action;

  /// do it! ///
  try {
    /// actions ///
    switch (type) {
      case types.ADD_FEATURE :

        hi.flag ('log', 'adding feature to car');

        return ({
          ...state,
          car : {
            ...state.car,
            features : [
              ...state.car.features,
              data,
            ].sort ((a, b) => (a.id - b.id)),
          },
          additionalPrice :
            state.additionalPrice + data.price, // maybe not robust?
          additionalFeatures :
            state.additionalFeatures.filter ((item) => (item.id !== data.id)),
        });

      case types.REMOVE_FEATURE :

        hi.flag ('log', 'removing feature from car');

        return ({
          ...state,
          car : {
            ...state.car,
            features : state.car.features.filter ((item) => (item.id !== data.id)),
          },
          additionalPrice :
            state.additionalPrice - data.price, // maybe not robust?
          additionalFeatures : [
            ...state.additionalFeatures,
            data
          ].sort ((a, b) => (a.id - b.id)),
        });

      // else
      default :

        hi.flag ('warn', 'action not defined');
        console.log (action);

        return (state);
    };
  }
  catch (error) {
    hi.flag ('error', 'something bad happened');
    console.error (error);
  }
};

/**************************************/

export default reducer;
