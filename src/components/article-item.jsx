import React from 'react'
import { shape, string } from 'prop-types'

import ExternalLink from '../components/elements/external-link'

const baseURL = 'https://reddit.com'

const ArticleItem = ({ data }) => (
    <li key={data.name}>
        {data.thumbnail !== 'self' && (
            <img src={data.thumbnail} alt={data.title} />
        )}
        <ExternalLink
            url={`${baseURL}/${data.permalink}`}
        >
            <p>{data.title}</p>
        </ExternalLink>
        <p>
            Posted by {' '}
            <ExternalLink url={`${baseURL}/user/${data.author}`}>
                {data.author}
            </ExternalLink>
            {data.created}
        </p>
        <p>
            <ExternalLink
                href={`${baseURL}/${data.permalink}#siteTable`}
                target="_blank"
                rel="noopener noreferrer"
            >
                comments
            </ExternalLink>
        </p>
    </li>
)

ArticleItem.propTypes = {
    data: shape({
        name: string.isRequired,
        thumbnail: string.isRequired,
        permalink: string.isRequired,
        title: string.isRequired,
        author: string.isRequired
    }).isRequired
}

export default ArticleItem
