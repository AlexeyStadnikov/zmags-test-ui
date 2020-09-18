export const createLoadingSelector = (actions) => (state) => {
    return actions
        .some((action) => state.loading[action]);
};

export const createErrorMessageSelector = (actions) => (state) => {
    return actions
        .map((action) => state.error[action])
        .filter((action) => action)[0] || '';
};

export const storiesToShowSelector = (state) => state.stories.selectedStories;

export const usersByIdSelector = (state) => state.users.byId;
