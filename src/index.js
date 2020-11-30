import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//I can create store, actions and reducers in 1 file... I didn't realize that.
//just for learning: https://www.youtube.com/watch?v=CVpUuw9XSjY
/*


//ACTION
  const increment = () => {
    return {
      type: 'INCREMENT'
    };
  }
  const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  }

//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

//STORE
let store = createStore(counter);
//display it in console, not needed in react redux...
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());


//review:

//dispatch calls an action, reducer looks at action, and returns a peice of state based on type.

*/


//DECLARING STORE in this file because why waste a file for it
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //webdev tools!
);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
