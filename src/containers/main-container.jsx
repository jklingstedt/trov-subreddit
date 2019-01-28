import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import history from '../utils/history'
import asyncComponent from '../components/async'
import MainContainerElement from '../components/elements/main-container-element'
import Header from '../components/header'

const AsyncHomeContainer = asyncComponent(() => import('./home-container'))
const AsyncSubredditContainer = asyncComponent(() => import('./subreddit-container'))
export const Async404 = asyncComponent(() => import('../components/error-404'))

export const MainContainer = () => (
    <MainContainerElement>
        <Router history={history}>
            <Fragment>
                <Header />
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
