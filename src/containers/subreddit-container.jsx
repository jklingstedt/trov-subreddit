import React, { Component } from 'react'
import { shape, func, instanceOf } from 'prop-types'
import { connect } from 'react-redux'

import { setArticles } from '../actions/reddit-data'
import { getSubreddits } from '../services/get-subreddits'
import UnformattedList from '../components/elements/unformatted-list'
import ArticleItem from '../components/article-item'

class SubredditContainer extends Component {
    static propTypes ={
        articles: instanceOf(Array).isRequired,
        match: shape({}).isRequired,
        dispatch: func.isRequired
    }

    componentDidMount() {
        getSubreddits(this.props.match.params.sub).then((res) => {
            this.props.dispatch(
                setArticles(
                    res.data.data.children,
                    this.props.match.params.sub
                )
            )
        })
    }

    render() {
        return (
            <UnformattedList>
                {this.props.articles.map(
                    item => (
                        (
                            <ArticleItem
                                data={item.data}
                                key={item.data.name}
                            />
                        )
                    )
                )}
            </UnformattedList>
        )
    }
}

const mapDispatchToProps = state => ({
    articles: state.redditData.articles
})

export default connect(mapDispatchToProps)(SubredditContainer)
