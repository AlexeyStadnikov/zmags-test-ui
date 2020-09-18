import {
    GET_STORIES_CONTENT_FAILURE,
    GET_STORIES_CONTENT_REQUEST, GET_STORIES_CONTENT_SUCCESS,
    GET_TOP_STORIES_FAILURE,
    GET_TOP_STORIES_REQUEST,
    GET_TOP_STORIES_SUCCESS,
    SELECT_STORIES
} from '../action-types';
import * as api from '../api';
import { randomSetOfNumbers } from '../../utils/numbers-util';
import config from '../../config.json';

export const loadTopStories = (useCache) => async (dispatch, getState) => {
    const state = getState();

    let storiesIds =
        useCache
            ? state.stories.storiesIds
            : null;

    if (!storiesIds?.length) {
        dispatch({ type: GET_TOP_STORIES_REQUEST });

        try {
            storiesIds = await api.getTopStories();
        } catch (e) {
            dispatch({ type: GET_TOP_STORIES_FAILURE, payload: { message: `Error loading topStories list` } });
            return;
        }

        dispatch({ type: GET_TOP_STORIES_SUCCESS, payload: { storiesIds } });
    }
};

export const selectRandomStories = () => (dispatch, getState) => {
    const state = getState();
    const storiesIds = state.stories.storiesIds;
    if (storiesIds.length) {
        const selectedStoriesIds = randomSetOfNumbers(config.storiesCount, storiesIds.length - 1).map((index) => storiesIds[index]);
        dispatch({ type: SELECT_STORIES, payload: { selectedStoriesIds } });
    }
}

export const loadSelectedStoriesContent = (useCache) => async (dispatch, getState) => {
    const state = getState();

    const cachedStories = state.stories.cached;
    const selectedStoriesIds = state.stories.selectedStoriesIds;

    const storiesIdsToLoad = useCache
        ? selectedStoriesIds.filter((storyId) => !cachedStories[storyId])
        : selectedStoriesIds;

    if (storiesIdsToLoad.length) {
        dispatch({ type: GET_STORIES_CONTENT_REQUEST });

        let stories;
        try {
            stories = await api.getStoriesContent(selectedStoriesIds);
        } catch (e) {
            dispatch({ type: GET_STORIES_CONTENT_FAILURE, payload: { message: `Error loading stories content` } });
            return;
        }

        dispatch({ type: GET_STORIES_CONTENT_SUCCESS, payload: { stories } });
    }
};
