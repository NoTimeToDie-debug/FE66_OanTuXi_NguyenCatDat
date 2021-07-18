import {combineReducers, createStore} from 'redux';
import BaiTapOanTuXiReducer from './reducers/BaiTapOanTuXiReducer'

const rootReducer  = combineReducers({
    BaiTapOanTuXiReducer
});



export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);