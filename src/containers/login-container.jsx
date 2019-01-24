import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginForm from '../components/login-form'
import handleLogin, { setUserData } from '../services/login'
import { authUser } from '../actions/user'

export class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isError: false
        }
    }

    handleLoginSubmit = (creds) => {
        this.setState({
            isLoading: true,
            isError: false
        })
        handleLogin(creds, this.handleLoginError)
            .then((res) => {
                res.data ?
                    setUserData(res.data.token)
                    :
                    this.handleLoginError()
            })
            .catch(() => this.handleLoginError())
    }

    handleLoginError = () => {
        this.setState({
            isError: true,
            isLoading: false
        })
    }

    clearError = () => {
        this.setState({ isError: false })
    }

    render() {
        return (
            <LoginForm
                handleLoginSubmit={this.handleLoginSubmit}
                clearError={this.clearError}
                isError={this.state.isError}
                isLoading={this.state.isLoading}
            />
        )
    }
}

const mapStateToProps = state => ({
    authUser: state.authUser
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({ authUser }, dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)
