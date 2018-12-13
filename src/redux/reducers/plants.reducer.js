import { combineReducers } from 'redux';

const plantsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLANT':
      return action.payload.data[0];
    default:
      return state;
  }
};

export default combineReducers({
  plantsReducer,
  detailsReducer
})
