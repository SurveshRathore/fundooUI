import {createStore, applyMiddleware, combineReducers} from 'redux';
import { DrawerReducer } from './drawerreducer';

const reducer = combineReducers({
    drawerReducer: DrawerReducer,

})

const store = createStore(reducer)

export default store