import store from '../../store'
import handleLogin, { setUserData } from '../login' // eslint-disable-line

describe('Login Service', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJKSEhfVVNFUlMiLCJwcm0iOlsiamhoX3VzZXIiLCJqaGhfYWRtaW4iLCJqaGhfY2FyZSIsImpoaF9xYSIsImpoaF9kYXRhbG9naXN0Il0sImp0aSI6MTE3LCJpZCI6eyJsYXN0IjoiS2xpbmdzdGVkdCIsInVpZCI6MiwiZmlyc3QiOiJKYXNvbiJ9LCJleHAiOjE1NDY1NjMyMjZ9.kX3UjFme2Aa1AFdEQ-MkXWCuXNZmqLJy4F-9X5Mp15U'

    it('should update state when passed a JWT', () => {
        let state = store.getState()
        expect(state.user.isAuthed).toBe(false)
        setUserData(token)
        state = store.getState()
        expect(state.user.isAuthed).toBe(true)
    })

    it('should make API call and handle it properly', () => {
        const creds = {
            username: 'testing@example.com',
            password: 'password'
        }
        const errorCallback = jest.fn()
        handleLogin(creds, errorCallback)
    })
})
