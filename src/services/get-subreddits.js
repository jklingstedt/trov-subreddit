import axios from 'axios'

export const getSubreddits = (subreddit='guitarpedals', type='top') => { // eslint-disable-line
    console.log(subreddit) // eslint-disable-line
    return axios.get(`https://www.reddit.com/r/${subreddit}/${type}/.json`)
}
