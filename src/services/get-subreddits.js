import axios from 'axios'

export const getSubreddits = (subreddit='guitarpedals', type='top') => { // eslint-disable-line
    console.log(subreddit) // eslint-disable-line
    axios.get(`https://www.reddit.com/r/${subreddit}/${type}/.json`)
        .then(res => console.log(res)) // eslint-disable-line
}
