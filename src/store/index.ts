import { AnyAction, applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk, { ThunkDispatch } from 'redux-thunk';

export type ReduxState = ReturnType<typeof rootReducer>;
export type ThunkDispatchType = ThunkDispatch<ReduxState, unknown, AnyAction>;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;