import axios from 'axios'

export const getSubreddits = (subreddit='guitarpedals', type='hot') => { // eslint-disable-line
    return axios.get(`https://www.reddit.com/r/${subreddit}/${type}/.json`)
}
