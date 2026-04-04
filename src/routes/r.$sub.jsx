import React, { Fragment } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { useSubredditInfiniteQuery } from '../queries/useSubredditQuery'
import UnformattedList from '../components/elements/unformatted-list'
import ArticleItem from '../components/article-item'
import Button from '../components/elements/button'

export const Route = createFileRoute('/r/$sub')({
  component: SubredditComponent,
})

function SubredditComponent() {
  const { sub } = Route.useParams()

  // Use infinite query for pagination support
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSubredditInfiniteQuery(sub, 'hot')

  if (isLoading) {
    return <div>Loading {sub} posts...</div>
  }

  if (isError) {
    return (
      <div>
        Error loading subreddit: {error?.message || 'Unknown error'}
      </div>
    )
  }

  // Flatten all pages of articles into a single array
  const allArticles = data?.pages?.flatMap(page => page.articles) || []

  return (
    <Fragment>
      <UnformattedList>
        {allArticles.map(item => (
          <ArticleItem data={item.data} key={item.data.name} />
        ))}
      </UnformattedList>

      {hasNextPage && (
        <Button
          color="green"
          size="large"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Get new articles'}
        </Button>
      )}

      {!hasNextPage && allArticles.length > 0 && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          No more articles to load
        </div>
      )}
    </Fragment>
  )
}
