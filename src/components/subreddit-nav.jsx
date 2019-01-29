import React from 'react'
import { instanceOf } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../styles/colors'

const StyledNav = styled.nav`
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    font-size: 110%;
    line-height: 1.4;

    a {
        text-decoration: none;
        display: block;
        color: ${colors.green};
        transition: color .2s linear;

        &:hover {
            color: ${colors.black}
        }
    }
`

const SubredditNav = props => (
    <StyledNav>
        <h2>Suggested Subreddits</h2>
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
