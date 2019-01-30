import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '../button'

describe('Button Component', () => {
    const defaultProps = {
        size: 'large',
        onClick: jest.fn()
    }

    const wrapper = shallow(
        <Button {...defaultProps} />
    )

    it('should render Button component', () => {
        wrapper.simulate('click')
        expect(defaultProps.onClick).toBeCalled()
    })

    it('Button matches snapshot', () => {
        const modalRender = renderer.create(
            <Button {...defaultProps} />
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
