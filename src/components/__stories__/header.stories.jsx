import React from 'react'
import { storiesOf } from '@storybook/react'
import { Router } from 'react-router-dom'

import Header from '../header'
import history from '../../utils/history'

storiesOf('Header', module)
    .add('Default Header', () => (
        <Router history={history}>
            <Header />
        </Router>
    ))
