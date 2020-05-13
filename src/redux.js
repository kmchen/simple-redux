import { applyMiddleware, createStore } from 'redux';
import logger from './react-redux-zero/middlewares/logger'

const INIT_STATE = {
  counterA: 0,
  counterB: 0,
}

const reducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "A_PLUS_ONE":
     return {
      ...state,
      counterA: state.counterA + 1 
     }
    case "B_PLUS_ONE":
     return {
      ...state,
      counterB: state.counterB + 1 
     }
    default:
     return state
  }
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
