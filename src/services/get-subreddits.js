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
    console.log(requestURL) // eslint-disable-line
    return axios.get(requestURL)
}
