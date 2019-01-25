import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import asyncComponent from '../components/async'
import NavigationContainer from './navigation-container' // eslint-disable-line

const AsyncHomeContainer = asyncComponent(() => import('./home-container'))
export const Async404 = asyncComponent(() => import('../components/error-404'))

export const MainContainer = () => (
    <div className="main-container">
        <Router>
            <Fragment>
                <NavigationContainer />
                <Switch>
                    <Route exact path="/" component={AsyncHomeContainer} />
                    <Route component={Async404} />
                </Switch>
            </Fragment>
        </Router>
    </div>
)

export const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(MainContainer)
