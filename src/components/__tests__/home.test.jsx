import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../home'

describe('Home Component', () => {
    it('Home matches snapshot', () => {
        const modalRender = renderer.create(
            <Home />
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
