import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { StateType } from 'typesafe-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todosReducer } from './todo/reducers';

const reducer = combineReducers({
  todos: todosReducer
});


export type AppState = StateType<typeof reducer>;

  function configureStore(preloadedState: any) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
}
export const rootStore = configureStore(undefined);