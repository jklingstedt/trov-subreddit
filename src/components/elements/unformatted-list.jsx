import React from 'react'
import { instanceOf } from 'prop-types'
import styled from 'styled-components'

const StyledUnformattedList = styled.ul`
    list-style: none;
    padding: 0;
`

const UnformattedList = ({ children }) => (
    <StyledUnformattedList>
        { children }
    </StyledUnformattedList>
)

UnformattedList.propTypes = {
    children: instanceOf(Object).isRequired
}

export default UnformattedList
