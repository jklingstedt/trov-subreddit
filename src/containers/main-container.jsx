import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import MainContainerElement from '../components/elements/main-container-element'
import asyncComponent from '../components/async'

const AsyncHomeContainer = asyncComponent(() => import('./home-container'))
const AsyncSubredditContainer = asyncComponent(() => import('./subreddit-container'))
export const Async404 = asyncComponent(() => import('../components/error-404'))

export const MainContainer = () => (
    <MainContainerElement>
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={AsyncHomeContainer} />
                    <Route exact path="/r/:sub" component={AsyncSubredditContainer} />
                    <Route component={Async404} />
                </Switch>
            </Fragment>
        </Router>
    </MainContainerElement>
)

export const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(MainContainer)
