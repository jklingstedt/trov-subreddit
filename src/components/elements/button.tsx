import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

interface ButtonSize {
  fontSize: string
  padding: string
}

interface Sizes {
  large: ButtonSize
  small: ButtonSize
}

const sizes: Sizes = {
  large: {
    fontSize: '130%',
    padding: '1em 2em'
  },
  small: {
    fontSize: '90%',
    padding: '.5em 1em'
  }
}

interface StyledButtonProps {
  size: keyof Sizes
  color: keyof typeof colors
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => colors[props.color]};
  color: ${colors.white};
  font-size: ${props => sizes[props.size].fontSize};
  border: none;
  padding: ${props => sizes[props.size].padding};
  border-radius: .5em;
  cursor: pointer;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof Sizes
  color?: keyof typeof colors
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  size = 'small',
  color = 'green',
  children = 'submit',
  onClick = () => null,
  ...props
}: ButtonProps) => (
  <StyledButton {...props} size={size} color={color} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
