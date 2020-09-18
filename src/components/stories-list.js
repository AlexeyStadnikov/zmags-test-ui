import React from 'react';

import { timestampToDate } from '../utils/date-util';

export default ({ stories, usersById }) => {
    const getKarma = (userId) => usersById[userId]?.karma;

    return <ul>
        {stories.map((story) => (
            <li key={story.id}>
                <span className="time mr-3">{timestampToDate(story.time)}</span>
                {story.url
                    ? <a href={story.url}>{story.title}</a>
                    : story.title}
                <span className="score ml-1">{story.score}</span>
                <span className="author ml-3">by {story.by}</span>
                <span className="karma ml-1">{getKarma(story.by)}</span>
            </li>
        ))}
    </ul>
}
