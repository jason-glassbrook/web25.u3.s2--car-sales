/// tools ///
import hi from 'tools/hi';
import iffy from 'tools/iffy';
import immutably from 'tools/immutably';
import nullably from 'tools/nullably';

/// internal modules ///
import initState from './init'
import { types } from './actions';

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

export const reducer = (state = initState, action) => {
  ///>>> add any helper funs <<<///

  /// do it! ///
  try {
    /// actions ///
    switch (action.type) {
      case types.ADD_FEATURE :
        hi.flag ('log', 'adding feature to car');
        return (state);
      case types.REMOVE_FEATURE :
        hi.flag ('log', 'removing feature from car');
        return (state);
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
