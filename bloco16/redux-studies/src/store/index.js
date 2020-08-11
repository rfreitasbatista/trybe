import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
  
  export default store;