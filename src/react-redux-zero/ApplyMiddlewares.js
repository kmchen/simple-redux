import { useContext} from 'react';
import Context from './Context';

const compose = (middlewares) => {
  return middlewares.reduce((acc, curr) => (...args) => acc(curr(...args)))
}

const applyMiddlewares = (...middlewares) => {
  return createStore => (reducers, ...args) => {
    const newStore = createStore(reducers, ...args);
    const newMiddlewares = middlewares.map(middleware => middleware(newStore));
    const composedMiddlewares = compose(...newMiddlewares);
    return newStore;
  }
}

export default applyMiddleware;

