import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { redditBaseURL } from '../constants'
import colors from '../styles/colors'

const StyledHeader = styled.header`
    background-color: ${colors.lightGrey};
    padding: 1em;
    border-radius: 0 0 .5em .5em;
`

const StyledSelect = styled.select``

const handleSelectChange = (e) => {
    console.log(e.target.value) // eslint-disable-line
    return (
        <Route>
            <Redirect to={`${redditBaseURL}/r/${e.target.value}`} />
        </Route>
    )
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.children[0].value) // eslint-disable-line
}

const Header = () => (
    <StyledHeader>
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
