import React from 'react';
import { useSelector } from './react-redux-zero';
import { useDispatch } from './react-redux-zero';

const A = () => {
  const dispatch = useDispatch();
  const counterA = useSelector(state => state.counterA, 'A');

  const handleAPlus = () => {
    dispatch({type: 'A_PLUS_ONE'});
  }
  
  return (
    <div>    
      <span>A: {counterA}</span>
      <button onClick={handleAPlus} >A++</button>
    </div>
  )
}
export default A;
