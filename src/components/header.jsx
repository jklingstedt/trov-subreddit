import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import history from '../utils/history'
import colors from '../styles/colors'

const StyledHeader = styled.header`
    background-color: ${colors.lightGrey};
    padding: 1em;
    border-radius: 0 0 .5em .5em;
`

const StyledSelect = styled.select``

const handleSelectChange = (e) => {
    history.push(`/r/${e.target.value}`)
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    history.push(`/r/${e.target.children[0].value}`)
}

const Header = () => (
    <StyledHeader>
        <Link to="/">Home</Link>
        <StyledSelect onChange={e => handleSelectChange(e)}>
            <option value="test">Test</option>
            <option value="guitarpedals">
                Guitar Pedals
            </option>
        </StyledSelect>
        <form onSubmit={e => handleFormSubmit(e)}>
            <input name="subreddit" />
            <button>go</button>
        </form>
    </StyledHeader>
)

export default Header
