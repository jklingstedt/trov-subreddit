import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { MainContainer, mapStateToProps } from '../main-container'
import store from '../../store'

describe('MainContainer', () => {
    const defaultProps = {
        user: {
            isAuthed: true,
            name: 'Emilio Estevez'
        }
    }
    const wrapper = shallow(<MainContainer {...defaultProps} />)

    it('should render MainContainer', () => {
        expect(wrapper.find('BrowserRouter').length).toBe(1)
        expect(wrapper.find('Route').length).toBe(2)
    })

    it('should have expected state', () => {
        const initialState = {
            user: defaultProps.user
        }
        expect(mapStateToProps(initialState).user.name)
            .toBe(defaultProps.user.name)
    })

    it('should render LoginContainer if not authed', () => {
        const newDefaultProps = {
            user: {
                isAuthed: false
            }
        }
        const newWrapper = shallow(<MainContainer {...newDefaultProps} />)
        expect(newWrapper.find('AsyncComponent').length).toBe(1)
        const mainContainerRender = renderer.create(
            <Provider store={store}>
                <MainContainer {...newDefaultProps} />
            </Provider>
        ).toJSON()
        expect(mainContainerRender).toMatchSnapshot()
    })

    it('LoginForm matches snapshot', () => {
        const mainContainerRender = renderer.create(
            <Provider store={store}>
                <MainContainer {...defaultProps} />
            </Provider>
        ).toJSON()
        expect(mainContainerRender).toMatchSnapshot()
    })
})
