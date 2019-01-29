import React from 'react'
import { instanceOf } from 'prop-types'
import styled from 'styled-components'

const StyledFieldset = styled.fieldset`
    border: none;
`

const FieldSet = ({ children }) => (
    <StyledFieldset>
        {children}
    </StyledFieldset>
)

FieldSet.propTypes = {
    children: instanceOf(Object).isRequired
}

export default FieldSet
