import React from 'react'

import SubredditNav from '../components/subreddit-nav'

const defaultSubs = [
    {
        title: 'Guitar Pedals',
        slug: 'guitarpedals'
    },
    {
        title: 'Guitars',
        slug: 'guitars'
    }
]

const MainContainer = () => (
    <SubredditNav subreddits={defaultSubs} />
)

export default MainContainer
