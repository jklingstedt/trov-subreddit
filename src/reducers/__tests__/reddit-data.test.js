import reducers from '../'
import { testData } from '../../utils/test-data'

describe('update redux state after fetching articles', () => {
    it('should update state with articles', () => {
        const state = reducers(
            { redditData: { currentSub: null, articles: [], afterPage: null } },
            {
                type: 'SET_ARTICLES',
                payload: {
                    articles: [
                        testData
                    ],
                    currentSub: 'guitarpedals',
                    afterPage: 't3_akzvex',
                    paging: false
                }
            }
        )
        expect(state).toEqual({
            redditData: {
                articles: [testData],
                currentSub: 'guitarpedals',
                afterPage: 't3_akzvex',
                paging: false
            }
        })
    })
})
