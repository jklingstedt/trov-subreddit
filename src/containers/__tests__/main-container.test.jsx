import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { MainContainer } from '../main-container'
import store from '../../store'

describe('MainContainer', () => {
    const wrapper = shallow(<MainContainer />)

    it('should render MainContainer', () => {
        expect(wrapper.find('Router').length).toBe(1)
        expect(wrapper.find('Route').length).toBe(3)
    })

    it('LoginForm matches snapshot', () => {
        const mainContainerRender = renderer.create(
            <Provider store={store}>
                <MainContainer />
            </Provider>
        ).toJSON()
        expect(mainContainerRender).toMatchSnapshot()
    })
})
