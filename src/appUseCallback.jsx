import React, { useCallback, memo, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import * as d3 from "d3";
import useInterval from '@use-it/interval';
import './App.css';

const MyComponent = React.memo(props => {
  const refCount = React.useRef(0);
  refCount.current++;

  const callback = props.useCallback ? 'useCallback' : 'without callback';

  return (<p>MyComponent {callback}. Ref Count: {refCount.current}</p>)
})

const equals = (a, b) => {
  return a === b ? "Equal" : 'Different';
}

function App() {
  const [state, setState] = useState("");
  const [someArg, setSomeArg] = useState("argument");

  const handleSomethingUseCallback = useCallback(() => {}, [someArg]);

  const handleSomething = e => {
    setState(e.target.value) 
  }

  const handleSetState = e => {
    setState(e.target.value) 
  }

  const refHandleSomethingUseCallback = useRef(handleSomethingUseCallback)
  const refHandleSomething = useRef(handleSomething)

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleSetState} />
      <p>
        handleSomethingUseCallback:{""}
        {equals(refHandleSomethingUseCallback.current, handleSomethingUseCallback)}
      </p>
      <p>
        handleSomething:{""}
        {equals(refHandleSomething.current, handleSomething)}
      </p>
      <MyComponent handleSomething={handleSomethingUseCallback} useCallback={true} />
      <MyComponent handleSomething={handleSomething} useCallback={false} />
    </div>
  );
}

export default App;

