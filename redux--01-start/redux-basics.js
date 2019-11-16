const redux = require('redux'); // node syntax because we'll test in node first
const createStore = redux.createStore; // createStore is a function from redux

const initialState = {
  counter: 0
}

// Reducer - the only thing that can update state/the store
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') { // .type comes from action dispatch
    return { // return a new JS object...
      ...state, // ...with a copy of old state...
      counter: state.counter + 1 // ...override one property you want to change
    }
  } 
  if (action.type === 'ADD_COUNTER') {
    return { 
      ...state,
      counter: state.counter + action.value
    }
  } 
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription 

// informs me whether state has been changed without having to manually do it
// triggered whenever state is updated/action is dispatched
store.subscribe(() => {
  // any code we want to execute on state update
  console.log('[Subscription]', store.getState()) 
});

// Dispatching Action

// access the store through store.dispatch - always dispatch an object which must include a 'type' (this is how the Reducer communicates with it)
store.dispatch({type: 'INC_COUNTER'}); // type is mandatory on every action we dispatch
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


