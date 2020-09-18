import {
    GET_USERS_FAILURE,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
} from '../action-types';
import * as api from '../api';

const getUsersByStories = (stories) => Array.from(stories.reduce((users, story) => story?.by && users.add(story.by), new Set()));

export const loadUsers = (usersIds, useCache) => async (dispatch, getState) => {
    const state = getState();

    if (useCache) {
        const usersById = state.users.byId;
        usersIds = usersIds.filter((userId) => !usersById[userId]);
    }

    if (usersIds.length) {
        dispatch({ type: GET_USERS_REQUEST });

        let users;
        try {
            users = await api.getUsers(usersIds);
        } catch (e) {
            dispatch({ type: GET_USERS_FAILURE, payload: { message: `Error loading users data` } });
            return;
        }

        dispatch({ type: GET_USERS_SUCCESS, payload: { users } });
    }
}

export const loadUsersByStories = (stories, useCache) => (dispatch) =>
    dispatch(loadUsers(getUsersByStories(stories), useCache));

export const loadUsersBySelectedStories = (useCache) => (dispatch, getState) =>
    dispatch(loadUsersByStories(getState().stories.selectedStories, useCache));
