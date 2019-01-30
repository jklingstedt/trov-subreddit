import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
/* eslint-disable-next-line import/no-named-as-default */
import MainContainer from './containers/main-container'

const App = () => (
    <Provider store={store}>
        <MainContainer />
    </Provider>
)

export default App
