import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { dashboardReducer } from './redux/reducer/DashboardReducerapi';
const reducer = combineReducers({
    dashboard: dashboardReducer
});

const initialState = {};
const Store = createStore(reducer, initialState,  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ));

export default Store;