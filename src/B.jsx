import React from 'react';
import { useSelector } from './react-redux-zero';
import { useDispatch } from './react-redux-zero';

const B = () => {
  const dispatch = useDispatch();
  const counterB = useSelector(state => state.counterB, 'B');

  const handleBPlus = () => {
    dispatch({type: 'B_PLUS_ONE'});
  }
  
  return (
    <div>    
      <span>B: {counterB}</span>
      <button onClick={handleBPlus} >B++</button>
    </div>
  )
}
export default B;

