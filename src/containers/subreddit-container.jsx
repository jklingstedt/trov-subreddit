import React, { PureComponent, Fragment } from 'react'
import { shape, func, instanceOf, string } from 'prop-types'
import { connect } from 'react-redux'

import { setArticles } from '../actions/reddit-data'
import { getSubreddits } from '../services/get-subreddits'
import UnformattedList from '../components/elements/unformatted-list'
import ArticleItem from '../components/article-item'
import Button from '../components/elements/button'

class SubredditContainer extends PureComponent {
    static defaultProps = {
        currentSub: null,
        afterPage: null
    }

    static propTypes = {
        articles: instanceOf(Array).isRequired,
        currentSub: string,
        afterPage: string,
        match: shape({
            params: shape({
                sub: string.isRequired
            }).isRequired
        }).isRequired,
        dispatch: func.isRequired
    }

    componentDidMount() {
        this.fetchAndStoreSubreddits()
        this.articleTimer = window.setInterval(this.getNewArticles, 60000)
    }

    componentDidUpdate() {
        if (this.props.match.params.sub !== this.props.currentSub) {
            this.fetchAndStoreSubreddits()
        }
    }

    componentWillUnmount() {
        this.articleTimer = clearInterval(this.articleTimer)
    }

    fetchAndStoreSubreddits(paging = false) {
        getSubreddits(
            this.props.match.params.sub,
            paging,
            this.props.afterPage
        ).then((res) => {
            this.props.dispatch(
                setArticles(
                    res.data.data.children,
                    this.props.match.params.sub,
                    res.data.data.after,
                    paging
                )
            )
        })
    }

    getNewArticles = () => {
        const paging = true
        this.fetchAndStoreSubreddits(paging)
    }

    render() {
        return (
            <Fragment>
                <UnformattedList>
                    {this.props.articles.map(item => (
                        <ArticleItem data={item.data} key={item.data.name} />
                    ))}
                </UnformattedList>
                <Button color="green" size="large" onClick={this.getNewArticles}>
                    Get new articles
                </Button>
            </Fragment>
        )
    }
}

const mapDispatchToProps = state => ({
    articles: state.redditData.articles,
    currentSub: state.redditData.currentSub,
    afterPage: state.redditData.afterPage
})

export default connect(mapDispatchToProps)(SubredditContainer)
