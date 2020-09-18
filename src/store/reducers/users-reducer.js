import { GET_USERS_SUCCESS } from '../action-types';

const initialState = {
    byId: {},
};

export default (state = initialState, action) => {
    const payload = action.payload || {};

    switch (action.type) {
        case GET_USERS_SUCCESS:
            const { users } = payload;
            const usersById = {};
            users.forEach((user) => usersById[user.id] = user);

            return {
                ...state,
                byId: { ...state.byId, ...usersById },
            };

        default:
    }

    return state;
};
