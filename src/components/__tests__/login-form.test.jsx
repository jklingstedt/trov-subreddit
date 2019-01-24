/* eslint-disable no-magic-numbers */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import LoginForm from '../login-form'

describe('LoginForm Component', () => {
    const defaultProps = {
        onValidSubmit: jest.fn(),
        handleLoginSubmit: jest.fn(),
        clearError: jest.fn()
    }
    const wrapper = shallow(
        <LoginForm {...defaultProps} />
    )

    it('should render LoginForm component', () => {
        expect(wrapper.find('Message').length).toBe(1)
        expect(wrapper.find('Button').length).toBe(1)
    })

    it('should display error message', () => {
        const isError = { isError: true }
        const newDefaultProps = { ...defaultProps, ...isError }
        const loginErrorRender = renderer.create(
            <LoginForm {...newDefaultProps} />
        ).toJSON()
        expect(loginErrorRender).toMatchSnapshot()
    })

    it('should fire form handler', () => {
        wrapper.find('Form').props().onValidSubmit()
        expect(defaultProps.handleLoginSubmit).toBeCalled()
    })

    it('LoginForm matches snapshot', () => {
        const loginFormRender = renderer.create(
            <LoginForm {...defaultProps} />
        ).toJSON()
        expect(loginFormRender).toMatchSnapshot()
    })
})
