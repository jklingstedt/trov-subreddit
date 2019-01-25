import React from 'react'
import styled from 'styled-components'
import { instanceOf } from 'prop-types'

const StyledMainContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    box-sizing: border-box;
`

const MainContainerElement = props => (
    <StyledMainContainer>
        {props.children}
    </StyledMainContainer>
)

MainContainerElement.propTypes ={
    children: instanceOf(Object).isRequired
}

export default MainContainerElement
