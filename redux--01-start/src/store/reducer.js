import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({}, state); // copy state immutably
        newState.counter = state.counter + 1;
        return newState;
    case actionTypes.DECREMENT:
      return {
        ...state, // another way of copying state immutably
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) // concat allows you to add a value to an array *do not use push
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