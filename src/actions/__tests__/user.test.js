import { AUTH_USER, UNAUTH_USER, authUser, unAuthUser } from '../user'

describe('should perform auth redux actions', () => {
    it('should auth user', () => {
        const userData = {
            name: 'Emilio Estevez',
            isAuthed: true
        }
        const expectedAction = {
            type: AUTH_USER,
            payload: userData
        }
        expect(authUser(userData)).toEqual(expectedAction)
    })

    it('should un-auth user', () => {
        const userData = {
            isAuthed: false
        }
        const expectedAction = {
            type: UNAUTH_USER,
            payload: userData
        }
        expect(unAuthUser(userData)).toEqual(expectedAction)
    })
})
