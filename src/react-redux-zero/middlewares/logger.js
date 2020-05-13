const logger = store => next => action => {
  console.log('Dispatching', action);
  const result = next(action);
  console.log('Return to logger ', store.getState());
  return result;
}

export default logger;
