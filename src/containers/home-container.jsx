import React from 'react'

import SubredditNav from '../components/subreddit-nav'
import { suggestedSubreddits } from '../constants/'

const MainContainer = () => (
    <SubredditNav subreddits={suggestedSubreddits} />
)

export default MainContainer
