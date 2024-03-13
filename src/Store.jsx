import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { dashboardReducer } from './redux/reducer/DashboardReducerapi';
import { centerReducer, postReducer } from './redux/reducer/CenterReducerapi';
import { FacilityReducer } from './redux/reducer/FacilityReducerapi';
const reducer = combineReducers({
    dashboard: dashboardReducer,
    center:centerReducer,
    addcenter:postReducer,
    facility: FacilityReducer,
});

const initialState = {};
const Store = createStore(reducer, initialState,  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ));

export default Store;