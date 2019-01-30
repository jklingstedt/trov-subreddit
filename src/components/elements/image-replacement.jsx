import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import styled from 'styled-components'

import colors from '../../styles/colors'

const StyledImageReplacement = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkestGrey};
    width: 140px;
    height: 100px;
    border-radius: .5em;
    text-align: center;
`

const ImageReplacement = () => (
    <StyledImageReplacement>
        no image
    </StyledImageReplacement>
)

ImageReplacement.propTypes = {
}

export default ImageReplacement
