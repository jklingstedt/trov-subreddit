import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

const enhancer = compose(
    applyMiddleware(
        promiseMiddleware
    ),
    window.window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.window.__REDUX_DEVTOOLS_EXTENSION__() :
        f => f
)

const store = createStore(rootReducer, {}, enhancer)

export default store
