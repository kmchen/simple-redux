import React, { createContext} from 'react';
import { Store } from 'redux';
import Context from './Context';

const Provider = ({store, children}) => <Context.Provider value={store} >{children}</Context.Provider>
export default Provider;
