import React from 'react'
import { instanceOf } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../styles/colors'

const StyledNav = styled.nav`
    max-width: 200px;
    margin: auto;
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    a {
        text-decoration: none;
        display: block;
        color: ${colors.red}
    }
`

const SubredditNav = props => (
    <StyledNav>
        <StyledList>
            {props.subreddits.map(sub => (
                <li key={sub.slug}>
                    <Link to={`/r/${sub.slug}`}>
                        {sub.title}
                    </Link>
                </li>
            ))}
        </StyledList>
    </StyledNav>
)

SubredditNav.propTypes = {
    subreddits: instanceOf(Array).isRequired
}

export default SubredditNav
