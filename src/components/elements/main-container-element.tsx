import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
  max-width: 1000px;
  margin: auto auto 3em;
  box-sizing: border-box;
`

interface MainContainerElementProps {
  children: React.ReactNode
}

const MainContainerElement = ({ children }: MainContainerElementProps) => (
  <StyledMainContainer>
    {children}
  </StyledMainContainer>
)

export default MainContainerElement
