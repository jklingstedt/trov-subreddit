import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import styled from 'styled-components'

import { suggestedSubreddits } from '../constants'
import colors from '../styles/colors'
import Button from './elements/button'
import Fieldset from './elements/fieldset'

const StyledLink = styled(Link)`
    color: ${colors.green};
    text-decoration: none;
    font-weight: bold;
    font-size: 120%;
    min-width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled.header`
    background-color: ${colors.lightGrey};
    padding: 1em;
    border-radius: 0 0 .5em .5em;
    display: flex;
`

const StyledSelect = styled.select`
    border: none;
    font-size: 110%;
    margin-top: .5em;
    padding: .5em;
    width: 100%;
`

const StyledForm = styled.form`
    align-self: flex-end;
    flex-grow: 2;

    input {
        border: none;
        border-radius: .5em;
        padding: .5em;
        font-size: 100%;
        margin: 0 1em 0 0;
    }
`

const Header = () => {
    const navigate = useNavigate()

    const handleSelectChange = (e) => {
        navigate({ to: '/r/$sub', params: { sub: e.target.value } })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const subreddit = e.target.children[0].value
        navigate({ to: '/r/$sub', params: { sub: subreddit } })
    }

    return (
        <StyledHeader>
            <StyledLink to="/">Home</StyledLink>
            <Fieldset>
                <label htmlFor="subreddit-select">Select a Suggested Subreddit</label>
                <StyledSelect onChange={e => handleSelectChange(e)} id="subreddit-select">
                    <optgroup label="Select a Suggested Subreddit">
                        {suggestedSubreddits.map(item => (
                            <option
                                value={item.slug}
                                key={item.slug}
                            >
                                {item.title}
                            </option>
                        ))}
                    </optgroup>
                </StyledSelect>
            </Fieldset>
            <StyledForm onSubmit={e => handleFormSubmit(e)}>
                <input
                    name="subreddit"
                    placeholder="Enter a subreddit..."
                />
                <Button color="green" size="small">submit</Button>
            </StyledForm>
        </StyledHeader>
    )
}

export default Header
