import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = compose(
    applyMiddleware(
        promiseMiddleware
    ),
    window.window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.window.__REDUX_DEVTOOLS_EXTENSION__() :
        f => f
)

const store = createStore(persistedReducer, {}, enhancer)

export const persistor = persistStore(store)
export default store
