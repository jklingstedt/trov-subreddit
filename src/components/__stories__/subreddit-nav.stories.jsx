import React from 'react'
import { storiesOf } from '@storybook/react'
import { Router } from 'react-router-dom'

import SubredditNav from '../subreddit-nav'
import history from '../../utils/history'
import { suggestedSubreddits } from '../../constants'

storiesOf('Subreddit Nav', module)
    .add('Subreddit Nav', () => (
        <Router history={history}>
            <SubredditNav subreddits={suggestedSubreddits} />
        </Router>
    ))
