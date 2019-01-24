import { AUTH_USER, UNAUTH_USER } from '../actions/user'

const intitialState = {
    isAuthed: false
}

export default (state = intitialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return action.payload
        case UNAUTH_USER:
            return action.payload
        default:
            return state
    }
}
