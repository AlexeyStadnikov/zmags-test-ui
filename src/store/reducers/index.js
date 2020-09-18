import { combineReducers } from 'redux'

import loadingReducer from './loading-reducer'
import errorReducer from './error-reducer'

import storiesReducer from './stories-reducer';
import usersReducer from './users-reducer';

export default combineReducers({
    loading: loadingReducer,
    error: errorReducer,

    stories: storiesReducer,
    users: usersReducer,
});
