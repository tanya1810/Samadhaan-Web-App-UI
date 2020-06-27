import userReducer from './user';
import { combineReducers } from 'redux';

const reducers={
    user:userReducer
};
const allReducers = combineReducers(reducers);
export default allReducers;