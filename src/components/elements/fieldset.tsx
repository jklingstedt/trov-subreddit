import React from 'react'
import styled from 'styled-components'

const StyledFieldset = styled.fieldset`
  border: none;
`

interface FieldSetProps {
  children: React.ReactNode
}

const FieldSet = ({ children }: FieldSetProps) => (
  <StyledFieldset>
    {children}
  </StyledFieldset>
)

export default FieldSet
