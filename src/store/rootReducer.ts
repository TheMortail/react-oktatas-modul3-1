import { combineReducers } from 'redux';
import zooReducer from './zoo/zooReducer';
import jokeReducer from './jokes/jokeReducer';

const rootReducer = combineReducers({ zooReducer, jokeReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
