
import uuid from 'uuid/v4';
import { createStore } from 'redux';

const initialState = {
  queries: [
    {
      id: uuid(),
      firstName: 'Atinc',
      surname: 'Erguven',
      email: 'Atinc@gmail.com',
      query: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco `
    },
  ],
  complete:false
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_QUERY':
      return {
        ...state,
        queries: [...state.queries, action.payload],
        complete: true
      };
    default:
      return state;
  }
}
// Actions
export const addQueryAction = (query) => ({
  type: 'ADD_QUERY',
  payload: query
});
