import React from 'react'
import { shape, string } from 'prop-types'
import { formatDistance } from 'date-fns'

import ExternalLink from '../components/elements/external-link'

const baseURL = 'https://reddit.com'

const ArticleItem = ({ data }) => (
    <li key={data.name}>
        {data.thumbnail !== 'self' && (
            <img src={data.thumbnail} alt={data.title} />
        )}
        <ExternalLink url={`${baseURL}/${data.permalink}`}>
            {data.title}
        </ExternalLink>
        <p>
            Posted by {' '}
            <ExternalLink url={`${baseURL}/user/${data.author}`}>
                {data.author}
            </ExternalLink>
            {formatDistance(data.created * 1000, Date.now())}
            {' '} ago
        </p>
        <p>
            <ExternalLink url={`${baseURL}/${data.permalink}#siteTable`}>
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
