import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { suggestedSubreddits } from '../constants'
import history from '../utils/history'
import colors from '../styles/colors'
import Button from './elements/button'

const StyledLink = styled(Link)`
    color: ${colors.green};
    text-decoration: none;
    font-weight: bold;
    font-size: 120%;
`

const StyledHeader = styled.header`
    background-color: ${colors.lightGrey};
    padding: 1em;
    border-radius: 0 0 .5em .5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyledSelect = styled.select``

const StyledForm = styled.form`
`

const handleSelectChange = (e) => {
    history.push(`/r/${e.target.value}`)
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    history.push(`/r/${e.target.children[0].value}`)
}

const Header = () => (
    <StyledHeader>
        <StyledLink to="/">Home</StyledLink>
        <fieldset>
            <label htmlFor="subreddit-select">Select a Suggested Subreddit</label>
            <StyledSelect onChange={e => handleSelectChange(e)} id="subreddit-select">
                <optgroup label="Select a Suggested Subreddit">
                    {suggestedSubreddits.map(item => (
                        <option value={item.slug} key={item.slug}>
                            {item.title}
                        </option>
                    ))}
                </optgroup>
            </StyledSelect>
        </fieldset>
        <StyledForm onSubmit={e => handleFormSubmit(e)}>
            <label htmlFor="subreddit-search">
                Enter a subreddit
            </label>
            <input name="subreddit" id="subreddit-search" />
            <Button color="green" size="small">submit</Button>
        </StyledForm>
    </StyledHeader>
)

export default Header
