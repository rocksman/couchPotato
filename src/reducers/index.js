import { combineReducers } from "redux";
import search from './search';
import user from './user';
import recommendation from './recommendation';

const rootReducer = combineReducers({
    search,
    user,
    recommendation
});

export default rootReducer;