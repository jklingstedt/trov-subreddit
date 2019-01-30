import React from 'react'
import { string, instanceOf, oneOfType } from 'prop-types'

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
    children: oneOfType([string, instanceOf(Object)]).isRequired
}

export default ExternalLink
