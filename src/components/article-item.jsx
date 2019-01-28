import React from 'react'
import { shape, string } from 'prop-types'
import { formatDistance } from 'date-fns'
import styled from 'styled-components'

import ExternalLink from '../components/elements/external-link'
import colors from '../styles/colors'
import { redditBaseURL } from '../constants'

const StyledArticleItem = styled.li`
    background-color: ${colors.lightGrey};
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
`

const ArticleItem = ({ data }) => (
    <StyledArticleItem key={data.name}>
        {data.thumbnail !== 'self' && (
            <img src={data.thumbnail} alt={data.title} />
        )}
        <ExternalLink url={`${redditBaseURL}/${data.permalink}`}>
            {data.title}
        </ExternalLink>
        <p>
            Posted by {' '}
            <ExternalLink url={`${redditBaseURL}/user/${data.author}`}>
                {data.author}
            </ExternalLink>
            {' '}
            {formatDistance(data.created * 1000, Date.now())}
            {' '} ago
        </p>
        <p>
            <ExternalLink url={`${redditBaseURL}/${data.permalink}#siteTable`}>
                comments
            </ExternalLink>
        </p>
    </StyledArticleItem>
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
