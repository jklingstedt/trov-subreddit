export interface RedditPost {
  name: string
  title: string
  author: string
  permalink: string
  thumbnail: string
  created: number
  subreddit: string
  url: string
  score: number
  num_comments: number
}

export interface RedditChild {
  kind: string
  data: RedditPost
}

export interface RedditListingData {
  after: string | null
  before: string | null
  children: RedditChild[]
  dist: number
  modhash: string
}

export interface RedditListing {
  kind: string
  data: RedditListingData
}

export interface RedditApiResponse {
  data: RedditListing
}
