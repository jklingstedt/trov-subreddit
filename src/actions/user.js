export const AUTH_USER = 'AUTH_USER'
export const UNAUTH_USER = 'UNAUTH_USER'

export const authUser = userData => ({
    type: AUTH_USER,
    payload: userData
})


export const unAuthUser = () => ({
    type: UNAUTH_USER,
    payload: {
        isAuthed: false
    }
})
