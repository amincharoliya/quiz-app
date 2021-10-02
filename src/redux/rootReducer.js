import { combineReducers } from 'redux';
import dataReducer from './Data/data.reducer';

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;