import * as actionTypes from './../actions';

// each reducer only has access to local state, not global state from index.js file
// to access global state and use other states to update parts of local state,
// global state must be accessed from the component and passed as an action payload to another reducer
// see example here on line 17 ' value: action.result' is used to access counter state from Counter component

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}) // concat allows you to add a value to an array *do not use push
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter( result => result.id !== action.resultId) 
      return {
        ...state,
        results: updatedArray
      }
  }
  return state;
};

export default reducer;