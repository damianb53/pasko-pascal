import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({ ui: uiReducer, test: testReducer });

export default rootReducer;
