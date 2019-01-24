import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Navigation from '../components/navigation'
import { unAuthUser } from '../actions/user'


const { shape, func } = PropTypes

export class NavigationContainer extends Component {
    static propTypes = {
        user: shape({}).isRequired,
        dispatch: func.isRequired
    }

    unAuthUser = () => {
        this.props.dispatch(unAuthUser())
    }

    render() {
        return (
            <Navigation
                user={this.props.user}
                unAuthUser={this.unAuthUser}
            />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(NavigationContainer)
