//use to combine reducers

import counterReducer from './counterReducer';
import boolReducer from './boolReducer';
// import textReducer from './textReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    boolReducer, //exporting it as itself

});

export default rootReducer;
