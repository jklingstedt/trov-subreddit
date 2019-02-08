import React, { lazy, Suspense, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from '../utils/history'
import MainContainerElement from '../components/elements/main-container-element'
import Header from '../components/header'

const AsyncHomeContainer = lazy(() => import('./home-container'))
const AsyncSubredditContainer = lazy(() => import('./subreddit-container'))
const Async404 = lazy(() => import('../components/error-404'))

const Loading = () => 'Loading...'

const MainContainer = () => (
    <Suspense fallback={Loading}>
        <MainContainerElement>
            <Router history={history}>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={AsyncHomeContainer} />
                        <Route
                            exact
                            path="/r/:sub"
                            component={AsyncSubredditContainer}
                        />
                        <Route component={Async404} />
                    </Switch>
                </Fragment>
            </Router>
        </MainContainerElement>
    </Suspense>
)
export default MainContainer
