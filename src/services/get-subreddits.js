import axios from 'axios'

import store from '../store'

export const getSubreddits = (subreddit='guitarpedals', paging=false, type='hot') => { // eslint-disable-line
    let afterPage = null
    if (paging) {
        const currentArticles = store.getState().redditData.articles
        afterPage = currentArticles[currentArticles.length - 1].data
        console.log(afterPage) // eslint-disable-line
    }
    return axios.get(`https://www.reddit.com/r/${subreddit}/${type}/.json?after=${afterPage}`)
}
