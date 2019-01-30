import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import MainContainer from '../main-container'

describe('MainContainer', () => {
    const wrapper = shallow(<MainContainer />)

    it('should render MainContainer', () => {
        expect(wrapper.find('Router').length).toBe(1)
        expect(wrapper.find('Route').length).toBe(3)
    })

    it('MainContainer matches snapshot', () => {
        const mainContainerRender = renderer.create(
            <MainContainer />
        ).toJSON()
        expect(mainContainerRender).toMatchSnapshot()
    })
})
