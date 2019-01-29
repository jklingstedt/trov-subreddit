import React from 'react'
import { shape, string } from 'prop-types'
import { formatDistance } from 'date-fns'
import styled from 'styled-components'

import ExternalLink from '../components/elements/external-link'
import ImageReplacement from '../components/elements/image-replacement'
import colors from '../styles/colors'
import { redditBaseURL } from '../constants'

const StyledArticleItem = styled.li`
    background-color: ${colors.lightGrey};
    padding: 1em;
    margin-bottom: 1em;
    border-radius: .5em;
    display: grid;
    grid-template-columns: 1fr 5fr;
    transition: background-color .3s linear;

    &:hover {
        background-color: ${colors.darkGrey}
    }

    a {
        color: ${colors.green};
        text-decoration: none;
    }

    h2 {
        font-size: 110%;
        margin-top: 0;
    }
`
const StyledImage = styled.img`
    border-radius: .5em;
`

const StyledTextWrapper = styled.div``

const ArticleItem = ({ data }) => (
    <StyledArticleItem key={data.name}>
        {data.thumbnail !== 'self' ? (
            <ExternalLink url={`${redditBaseURL}/${data.permalink}`}>
                <StyledImage src={data.thumbnail} alt={data.title} />
            </ExternalLink>
        ) :
            (
                <ImageReplacement />
            )
        }
        <StyledTextWrapper>
            <h2>
                <ExternalLink url={`${redditBaseURL}/${data.permalink}`}>
                    {data.title}
                </ExternalLink>
            </h2>
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
        </StyledTextWrapper>
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
