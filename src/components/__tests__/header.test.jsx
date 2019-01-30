import React from 'react'
import renderer from 'react-test-renderer'
import { Router } from 'react-router-dom'

import history from '../../utils/history'
import Header from '../header'

describe('Header Component', () => {
    it('Header matches snapshot', () => {
        const modalRender = renderer.create(
            <Router history={history}>
                <Header />
            </Router>
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
