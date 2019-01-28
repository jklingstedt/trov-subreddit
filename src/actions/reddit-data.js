export const SET_ARTICLES = 'SET_ARTICLES'

export const setArticles = (articles, currentSub) => ({
    type: SET_ARTICLES,
    payload: {
        articles,
        currentSub
    }
})
