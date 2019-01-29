import { SET_ARTICLES } from '../actions/reddit-data'

const intitialState = {
    currentSub: null,
    articles: [],
    afterPage: null
}

export default (state = intitialState, action) => {
    switch (action.type) {
        case SET_ARTICLES: {
            const newPayload = action.payload
            if (action.payload.paging) {
                newPayload.articles = [
                    ...state.articles,
                    ...action.payload.articles
                ]
            }
            return newPayload
        }
        default:
            return state
    }
}
