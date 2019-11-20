import { getSubreddits } from '../get-subreddits'

describe('Reddit data service', () => {
    it('should test the reddit api service with paging off', () => {
        getSubreddits(
            'guitarpedals'
        )
    })

    it('should test the reddit api service with paging on', () => {
        getSubreddits(
            'guitarpedals',
            true
        )
    })
})
