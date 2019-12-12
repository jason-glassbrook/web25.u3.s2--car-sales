/***************************************
  MAIN
----------------------------------------
  - types  : list of action types
  - make   : fun to make (create) an action obj
  - makers : obj of action maker (creator) funs
***************************************/

const types = {
  ADD_FEATURE : 'ADD_FEATURE',
  REMOVE_FEATURE : 'REMOVE_FEATURE',
};

const make = (type, data) => ({ type, data });

const makers = Object.fromEntries (
  Object.keys (types).map ((name) => [
    name, (...args) => make (name, ...args)
  ])
);

/**************************************/

export default {
  types,
  makers,
};
