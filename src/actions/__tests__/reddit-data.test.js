import { setArticles, SET_ARTICLES } from '../reddit-data'

describe('should perform reddit article redux actions', () => {
    it('should set reddit data', () => {
        const redditData = {
            articles: [],
            currentSub: 'test',
            afterPage: 'test',
            paging: false
        }
        const expectedAction = {
            type: SET_ARTICLES,
            payload: redditData
        }
        expect(setArticles(
            redditData.articles,
            redditData.currentSub,
            redditData.afterPage,
            redditData.paging
        )).toEqual(expectedAction)
    })
})
