import {
    GET_RANDOM_STORIES_REQUEST,
    GET_RANDOM_STORIES_SUCCESS,
} from '../action-types';
import * as users from './users-actions';
import * as stories from './stories-actions';

export const loadRandomTopStories = (useCache) => async (dispatch) => {
    dispatch({ type: GET_RANDOM_STORIES_REQUEST });
    await new Promise(resolve => setTimeout(resolve, 1000));

    dispatch(stories.loadTopStories(useCache))
        .then(() => dispatch(stories.selectRandomStories()))
        .then(() => dispatch(stories.loadSelectedStoriesContent(useCache)))
        .then(() => dispatch(users.loadUsersBySelectedStories(useCache)))
        .then(() => dispatch({ type: GET_RANDOM_STORIES_SUCCESS }));
}
