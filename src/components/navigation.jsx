import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

import '../styles/navigation.css'

const { shape, func } = PropTypes

const Navigation = props => (
    <nav>
        <Menu pointing>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item className="user-menu">
                    <p className="user-name">{props.user.name}</p>
                    <span className="user-sign-out" onClick={props.unAuthUser}>
                        Sign Out
                        <Icon name="log out" className="sign-out-icon" />
                    </span>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </nav>
)

Navigation.propTypes = {
    user: shape().isRequired,
    unAuthUser: func.isRequired
}

export default Navigation
