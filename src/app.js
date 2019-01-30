import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import MainContainer from './containers/main-container'

const App = () => (
    <Provider store={store}>
        <MainContainer />
    </Provider>
)

export default App
