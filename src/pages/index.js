import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadRandomTopStories } from '../store/actions';
import {
    createLoadingSelector,
    createErrorMessageSelector,
    storiesToShowSelector,
    usersByIdSelector,
} from '../store/selectors';

import StoriesList from '../components/stories-list';
import Spinner from '../components/spinner';

const isLoadingSelector = createLoadingSelector(['GET_RANDOM_STORIES']);
const errorMessageSelector = createErrorMessageSelector(['GET_TOP_STORIES', 'GET_STORIES_CONTENT', 'GET_USERS']);

const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMessage: errorMessageSelector(state),
    stories: storiesToShowSelector(state),
    usersById: usersByIdSelector(state),
});

const mapDispatchToProps = { loadRandomTopStories };

export default connect(mapStateToProps, mapDispatchToProps)
(({
      isLoading,
      errorMessage,
      stories,
      usersById,
      loadRandomTopStories,
  }) => {

    useEffect(() => loadRandomTopStories(), [loadRandomTopStories]);

    const onClickTryAgain = useCallback(() => loadRandomTopStories(true), [loadRandomTopStories]);

    return (
        <div className="container d-flex flex-column h-100 page-index">
            {isLoading
            && <Spinner/>}

            {errorMessage
            && <div className="alert alert-danger">{errorMessage}</div>}

            {!isLoading
            && <div className="text-right">
                <button type="button"
                        className="btn btn-primary"
                        onClick={onClickTryAgain}
                >
                    Try again
                </button>
            </div>}

            {!isLoading
            && !errorMessage
            && <StoriesList stories={stories} usersById={usersById}/>}
        </div>
    )
})
