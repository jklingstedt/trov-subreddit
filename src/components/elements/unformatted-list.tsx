import React from 'react'
import styled from 'styled-components'

const StyledUnformattedList = styled.ul`
  list-style: none;
  padding: 0;
`

interface UnformattedListProps {
  children: React.ReactNode
}

const UnformattedList = ({ children }: UnformattedListProps) => (
  <StyledUnformattedList>
    {children}
  </StyledUnformattedList>
)

export default UnformattedList
