import React from 'react'
import { shallow } from 'enzyme'

import { testData } from '../../utils/test-data'
import { SubredditContainer } from '../subreddit-container'

describe('SubredditContainer Component', () => {
    const defaultProps = {
        articles: [testData],
        match: {
            params: {
                sub: 'guitarpedals'
            }
        },
        dispatch: jest.fn()
    }

    const wrapper = shallow(
        <SubredditContainer {...defaultProps} />
    )

    it('should render SubredditContainer component', () => {
        expect(wrapper.find('UnformattedList').length).toBe(1)
        expect(wrapper.find('Button').length).toBe(1)
    })

    it('should test intance methods', () => {
        const instance = shallow(
            <SubredditContainer {...defaultProps} />
        ).instance()
        instance.componentDidUpdate()
        instance.componentWillUnmount()
        instance.getNewArticles()
        instance.fetchAndStoreSubreddits()
        instance.props.dispatch()
        expect(instance.props.dispatch).toBeCalled()
    })
})
