import React, { useCallback, memo, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import { Provider } from './react-redux-zero';
import store from './redux';

//import * as d3 from "d3";
//import useInterval from '@use-it/interval';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <A />
        <B />
      </div>
    </Provider>
  );
}

export default App;
