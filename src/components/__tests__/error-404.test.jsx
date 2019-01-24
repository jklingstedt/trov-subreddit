import React from 'react'
import renderer from 'react-test-renderer'
import Error404 from '../error-404'

describe('Error404 Component', () => {
    const defaultProps = {
        location: {
            pathname: 'foo'
        }
    }

    it('Error404 matches snapshot', () => {
        const modalRender = renderer
            .create(<Error404 {...defaultProps} />)
            .toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
