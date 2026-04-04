import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import SubredditNav from '../components/subreddit-nav'
import { suggestedSubreddits } from '../constants'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return <SubredditNav subreddits={suggestedSubreddits} />
}
