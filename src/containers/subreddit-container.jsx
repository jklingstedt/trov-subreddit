import React, { Component } from 'react'
import { shape } from 'prop-types'

import { getSubreddits } from '../services/get-subreddits'

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
        // eslint-disable-line
        console.log(this.state.currentSubData) // eslint-disable-line
        return (
            <ul>
                {this.state.currentSubData.map(item => (
                    <li key={item.data.name}>
                        <a
                            href={`https://reddit.com/${item.data.permalink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.data.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}

SubredditContainer.propTypes = {
    match: shape({}).isRequired
}

export default SubredditContainer
