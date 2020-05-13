import { useEffect, useContext, useRef, useReducer } from 'react';
import Context from './Context';

const defaultEqualityFn = (a, b) => a === b;

const useSelector = (selector, a, equalityFn = defaultEqualityFn) => {
  const store = useContext(Context);
  const [, forceRender] = useReducer(s => s+1, 0);
  const latestSelectedState = useRef();
  const selectedState = selector(store.getState());
  function checkForUpdates() {
    const newSelectedState = selector(store.getState());
    console.log(a, newSelectedState, latestSelectedState.current, 'forceRender', !equalityFn(newSelectedState, latestSelectedState.current))
    if (equalityFn(newSelectedState, latestSelectedState.current)) {
      return;
    }
    latestSelectedState.current = newSelectedState;
    forceRender();
  }
  
  useEffect(() => {
    const unsubscribe = store.subscribe(checkForUpdates);
    return unsubscribe;
  }, [])

  return selectedState;
}

export default useSelector;

