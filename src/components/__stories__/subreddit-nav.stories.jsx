import React from 'react'
import { storiesOf } from '@storybook/react'
import { RouterProvider, createRouter, createRootRoute } from '@tanstack/react-router'

import SubredditNav from '../subreddit-nav'
import { suggestedSubreddits } from '../../constants'

// Create a simple mock router for Storybook
const rootRoute = createRootRoute({
  component: () => <SubredditNav subreddits={suggestedSubreddits} />,
})

const router = createRouter({
  routeTree: rootRoute,
})

storiesOf('Subreddit Nav', module)
    .add('Subreddit Nav', () => (
        <RouterProvider router={router} />
    ))
