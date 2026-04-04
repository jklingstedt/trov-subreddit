import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

const StyledImageReplacement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGrey};
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

export default ImageReplacement
