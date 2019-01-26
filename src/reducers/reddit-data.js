import { SET_ARTICLES } from '../actions/reddit-data'

const intitialState = {
    currentSub: null,
    articles: []
}

export default (state = intitialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return action.payload
        default:
            return state
    }
}
