import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({
  repos: reposReducer,
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;
