import React, { Fragment, Component } from 'react'
import { bool, shape } from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import asyncComponent from '../components/async'
import NavigationContainer from './navigation-container' // eslint-disable-line

const AsyncLoginContainer = asyncComponent(() => import('./login-container'))
const AsyncHomeContainer = asyncComponent(() => import('./home-container'))
export const Async404 = asyncComponent(() => import('../components/error-404'))

export class MainContainer extends Component {
    static propTypes = {
        user: shape({
            isAuthed: bool.isRequired
        }).isRequired
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="main-container">
                {this.props.user.isAuthed ?
                    <Router>
                        <Fragment>
                            <NavigationContainer />
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={AsyncHomeContainer}
                                />
                                <Route component={Async404} />
                            </Switch>
                        </Fragment>
                    </Router>
                    :
                    <AsyncLoginContainer />
                }
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(MainContainer)
