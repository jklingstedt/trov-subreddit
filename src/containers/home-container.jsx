import React, { Component } from 'react'
import PropTypes from 'prop-types' // eslint-disable-line

import { getSubreddits } from '../services/get-subreddits'

class HomeContainer extends Component { // eslint-disable-line
    getSubreddits() { // eslint-disable-line
        getSubreddits()
    }

    render() { // eslint-disable-line
        return (
            <div>
                Home
                <button onClick={this.getSubreddits}>Get Subreddits</button>
            </div>
        )
    }
}

HomeContainer.propTypes = {
}

export default HomeContainer
