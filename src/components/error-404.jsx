import React from 'react'
import PropTypes from 'prop-types'

const { shape, string } = PropTypes

const Error404 = props => (
    <div>
        There is no content at {` ${props.location.pathname}`}
    </div>
)

Error404.propTypes = {
    location: shape({
        pathname: string.isRequired
    }).isRequired
}

export default Error404
