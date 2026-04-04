import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { getSubreddits } from '../services/get-subreddits'
import type { RedditChild } from '../types/reddit'

interface SubredditQueryResult {
  articles: RedditChild[]
  afterPage: string | null
}

/**
 * Query hook for fetching subreddit data with automatic refetching
 * @param subreddit - The subreddit name to fetch
 * @param type - The type of posts to fetch (hot, new, top, etc.)
 * @returns Query result with data, isLoading, error, etc.
 */
export const useSubredditQuery = (subreddit: string, type: string = 'hot') => {
  return useQuery<SubredditQueryResult>({
    queryKey: ['subreddit', subreddit, type],
    queryFn: async () => {
      const response = await getSubreddits(subreddit, false, null, type)
      return {
        articles: response.data.data.children,
        afterPage: response.data.data.after,
      }
    },
    enabled: !!subreddit, // Only run query if subreddit is provided
    staleTime: 60000, // Consider data fresh for 60 seconds
    refetchInterval: 60000, // Auto-refetch every 60 seconds (replaces setInterval)
    refetchIntervalInBackground: false, // Don't refetch when tab is not visible
  })
}

/**
 * Infinite query hook for paginated subreddit data
 * Use this for "load more" functionality
 * @param subreddit - The subreddit name to fetch
 * @param type - The type of posts to fetch (hot, new, top, etc.)
 * @returns Infinite query result with data, fetchNextPage, hasNextPage, etc.
 */
export const useSubredditInfiniteQuery = (subreddit: string, type: string = 'hot') => {
  return useInfiniteQuery<SubredditQueryResult, Error>({
    queryKey: ['subreddit', subreddit, type, 'infinite'],
    queryFn: async ({ pageParam }) => {
      const response = await getSubreddits(
        subreddit,
        !!pageParam,
        pageParam as string | null,
        type
      )
      return {
        articles: response.data.data.children,
        afterPage: response.data.data.after,
      }
    },
    enabled: !!subreddit,
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.afterPage ?? undefined,
    staleTime: 60000,
    refetchInterval: 60000,
    refetchIntervalInBackground: false,
  })
}
