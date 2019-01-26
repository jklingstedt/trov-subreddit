import React from 'react'
import { instanceOf, string } from 'prop-types'

const ExternalLink = ({ url, children }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        { children }
    </a>
)

ExternalLink.propTypes = {
    url: string.isRequired,
    children: instanceOf(Object).isRequired
}

export default ExternalLink
