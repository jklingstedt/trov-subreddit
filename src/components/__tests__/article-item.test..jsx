import React from 'react'
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
            created: 154888188
        }
    }

    it('ArticleItem matches snapshot', () => {
        const modalRender = renderer.create(
            <ArticleItem {...defaultProps} />
        ).toJSON()
        expect(modalRender).toMatchSnapshot()
    })
})
