import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ArticleItem from '../article-item'

describe('ArticleItem Component', () => {
    const defaultProps = {
        data: {
            name: 'test name',
            title: 'test title',
            author: 'Emilio Estevez',
            thumbnail: 'self',
            permalink: 'https://example.com',
            created: Date.now()
        }
    }

    const wrapper = shallow(
        <ArticleItem {...defaultProps} />
    )

    it('should render ArticleItem component', () => {
        console.log(wrapper.debug()) // eslint-disable-line
    })

    it('ArticleItem matches snapshot', () => {
        const modalRender = renderer.create(
            <ArticleItem {...defaultProps} />
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})