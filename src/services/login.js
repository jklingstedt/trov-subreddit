import axios from 'axios'
import base64 from 'base-64'
import jwtDecode from 'jwt-decode'

import store from '../store'
import { authUser } from '../actions/user'

const userAPIUrl = process.env.REACT_APP_USER_API_URL

export const setUserData = (token) => {
    const tokenData = jwtDecode(token)
    const userData = {
        isAuthed: true,
        authTime: Date.now(),
        uid: tokenData.id.uid,
        name: `${tokenData.id.first} ${tokenData.id.last}`,
        exp: tokenData.exp,
        perms: tokenData.prm,
        token: token
    }
    store.dispatch(authUser(userData))
}

const handleLogin = (creds) => {
    let userCreds = `${creds.username}:${creds.password}`
    userCreds = base64.encode(userCreds)

    return axios({
        url: `${userAPIUrl}/@me/tokens`,
        method: 'POST',
        headers: {
            Authorization: `Basic ${userCreds}`
        }
    })
}

export default handleLogin
