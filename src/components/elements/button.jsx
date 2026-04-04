import React from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'

const sizes = {
    large: {
        fontSize: '130%',
        padding: '1em 2em'
    },
    small: {
        fontSize: '90%',
        padding: '.5em 1em'
    }
}

const StyledButton = styled.button`
    background-color: ${props => colors[props.color]};
    color: ${colors.white};
    font-size: ${props => sizes[props.size].fontSize};
    border: none;
    padding: ${props => sizes[props.size].padding};
    border-radius: .5em;
    cursor: pointer;
`

const Button = ({
    size = 'small',
    color = 'green',
    children = 'submit',
    onClick = () => null,
    ...props
}) => (
    <StyledButton {...props} size={size} color={color} onClick={onClick}>
        {children}
    </StyledButton>
)

Button.propTypes = {
    size: string,
    color: string,
    children: string,
    onClick: func
}

export default Button
