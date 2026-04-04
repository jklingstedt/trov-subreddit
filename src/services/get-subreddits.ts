import axios, { AxiosResponse } from 'axios'
import { redditBaseURL } from '../constants'
import type { RedditListing } from '../types/reddit'

export const getSubreddits = (
  subreddit: string,
  paging: boolean = false,
  afterPage: string | null = null,
  type: string = 'hot'
): Promise<AxiosResponse<RedditListing>> => {
  let requestURL = `${redditBaseURL}/r/${subreddit}/${type}/.json`
  if (paging && afterPage) {
    requestURL = `${requestURL}?after=${afterPage}`
  }
  return axios.get<RedditListing>(requestURL)
}
