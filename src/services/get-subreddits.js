import axios from 'axios'
import { redditBaseURL } from '../constants'

export const getSubreddits = ( // eslint-disable-line
    subreddit,
    paging = false,
    afterPage,
    type = 'hot'
) => {
    let requestURL = `${redditBaseURL}/r/${subreddit}/${type}/.json`
    if (paging) {
        requestURL = `${requestURL}?after=${afterPage}`
    }
    return axios.get(requestURL)
}
