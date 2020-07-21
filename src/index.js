import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

function runner(genFunc) {
  const iterator = genFunc();
  function next(args) {
    console.log(args && args.data)
    let resp = iterator.next(args); 
    if(resp.done) {
      return args;
    } else {
      return Promise.resolve(resp.value).then(next) 
    }
  }
  return next()
}

function *genFunc() {
  const USER_URI = 'https://reqres.in/api/users';
  let resp = yield axios.get(USER_URI);
  const userId = resp.data.data[0].id;
  yield axios.get(`${USER_URI}/${userId}`);
}

const result = runner(genFunc);
Promise.resolve(result).then(res => console.log(res.data));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
