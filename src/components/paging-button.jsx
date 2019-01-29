import React from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'

import colors from '../styles/colors'

const StyledPagingButton = styled.button`
    background-color: ${colors.green};
    color: ${colors.white}
    border: none;
    border-radius: .4em;
    font-size: 110%;
    padding: 1em 2em;
    cursor: pointer;
`

const PagingButton = ({ onClick, children }) => (
    <StyledPagingButton onClick={onClick}>
        {children}
    </StyledPagingButton>
)

PagingButton.defaultProps = {
    onClick: () => null
}

PagingButton.propTypes = {
    onClick: func,
    children: string.isRequired
}

export default PagingButton
