import React from 'react'
import { shallow } from 'enzyme'

import { NavigationContainer } from '../navigation-container'
import store from '../../store'

describe('should render navigation container', () => {
    const defaultProps = {
        store: store,
        dispatch: jest.fn(),
        user: {
            name: 'Emiliio Estevez'
        }
    }

    const wrapper = shallow(
        <NavigationContainer {...defaultProps} />
    )

    it('should render NavigationContainer', () => {
        wrapper.instance().unAuthUser()
        expect(defaultProps.dispatch).toBeCalled()
    })
})
