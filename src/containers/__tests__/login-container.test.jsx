import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { LoginContainer } from '../login-container'
import store from '../../store'

describe('LoginContainer Component', () => {
    const defaultProps = {
        store: store,
        authUser: jest.fn()
    }

    const wrapper = shallow(
        <LoginContainer {...defaultProps} />
    )

    it('should render change stage when form is submitted', () => {
        const creds = {
            username: 'Emilio Estevez',
            password: 'foo'
        }
        wrapper.instance().handleLoginSubmit(creds)
        expect(wrapper.instance().state.isLoading).toBe(true)
        expect(wrapper.instance().state.isError).toBe(false)
    })

    it('should change state when handleLoginError is called', () => {
        wrapper.instance().handleLoginError()
        expect(wrapper.instance().state.isLoading).toBe(false)
        expect(wrapper.instance().state.isError).toBe(true)
    })

    it('should change state when clearError is called', () => {
        wrapper.instance().clearError()
        expect(wrapper.instance().state.isLoading).toBe(false)
        expect(wrapper.instance().state.isError).toBe(false)
    })

    it('LoginContainer matches snapshot', () => {
        const modalRender = renderer
            .create(<LoginContainer {...defaultProps} />)
            .toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
