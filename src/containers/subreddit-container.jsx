import React, { Component } from 'react'
import { shape } from 'prop-types'

import { getSubreddits } from '../services/get-subreddits'
import UnformattedList from '../components/elements/unformatted-list'
import ArticleItem from '../components/article-item'

class SubredditContainer extends Component {
    constructor() {
        super()
        this.state = {
            currentSubData: []
        }
    }

    componentDidMount() {
        getSubreddits(this.props.match.params.sub).then(res =>
            this.setState({
                currentSubData: res.data.data.children
            })
        )
    }

    render() {
        return (
            <UnformattedList>
                {this.state.currentSubData.map(
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

SubredditContainer.propTypes = {
    match: shape({}).isRequired
}

export default SubredditContainer
