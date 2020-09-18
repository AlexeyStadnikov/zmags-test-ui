import {
    GET_TOP_STORIES_SUCCESS,
    SELECT_STORIES,
    GET_STORIES_CONTENT_SUCCESS,
} from '../action-types';

const initialState = {
    storiesIds: [],
    selectedStoriesIds: [],
    selectedStories: [],
    cached: {},
};

function getSelectedStories(storiesIds, storiesById) {
    return storiesIds
        .map((storyId) => storiesById[storyId])
        .filter((story) => story)
        .sort((a, b) => a.score - b.score);
}

export default (state = initialState, action) => {
    const payload = action.payload || {};

    switch (action.type) {
        case GET_TOP_STORIES_SUCCESS:
            const { storiesIds } = payload;

            return {
                ...state,
                storiesIds,
            };

        case SELECT_STORIES: {
            const { selectedStoriesIds } = payload;

            const selectedStories = getSelectedStories(selectedStoriesIds, state.cached);

            return {
                ...state,
                selectedStoriesIds,
                selectedStories,
            };
        }

        case GET_STORIES_CONTENT_SUCCESS: {
            const { stories } = payload;

            const storiesById = {};
            stories.forEach((story) => storiesById[story.id] = story);

            const cached = { ...state.cached, ...storiesById };

            const selectedStories = getSelectedStories(state.selectedStoriesIds, cached);

            return {
                ...state,
                selectedStories,
                cached,
            };
        }

        default:
    }

    return state;
};
