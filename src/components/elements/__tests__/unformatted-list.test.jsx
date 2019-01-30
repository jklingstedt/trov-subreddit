import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import UnformattedList from '../unformatted-list'

describe('UnformattedList Component', () => {
    const wrapper = shallow(
        <UnformattedList>
            <li>test</li>
        </UnformattedList>
    )

    it('should render UnformattedList component', () => {
        expect(wrapper.find('li').length).toBe(1)
    })

    it('UnformattedList matches snapshot', () => {
        const modalRender = renderer.create(
            <UnformattedList>
                <li>test</li>
            </UnformattedList>
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
