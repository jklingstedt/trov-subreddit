import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import MainContainer from './containers/main-container' // eslint-disable-line

const Loading = () => (
    <p>Loading...</p>
)

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <MainContainer store={store} />
        </PersistGate>
    </Provider>
)

export default App
