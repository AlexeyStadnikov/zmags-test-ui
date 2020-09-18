import config from '../../config.json';

function fetchJson(url) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
}

// region Stories

export function getTopStories() {
    return fetchJson(config.topStoriesUrl);
}

export function getStoryContent(id) {
    return fetchJson(config.storyUrl.replace('{id}', id));
}

export function getStoriesContent(ids) {
    return Promise.all(ids.map((id) => getStoryContent(id)));
}

// endregion

// region Users

export function getUser(id) {
    return fetchJson(config.userUrl.replace('{id}', id));
}

export function getUsers(ids) {
    return Promise.all(ids.map((id) => getUser(id)))
}

// endregion
