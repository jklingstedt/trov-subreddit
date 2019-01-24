import React from 'react'
import { func, bool } from 'prop-types'
import { Form } from 'formsy-semantic-ui-react'
import { Message, Button, Label } from 'semantic-ui-react'

import '../styles/login-form.css'

const errorLabel = <Label color="red" pointing />

const LoginForm = props => (
    <Message className="login-form">
        {props.isError &&
            <Message
                color="red"
                icon="warning sign"
                header="Error"
                content="There was an error logging in."
            />
        }
        <Form
            onValidSubmit={props.handleLoginSubmit}
            onFocus={props.clearError}
        >
            <Form.Input
                name="username"
                id="username"
                label="Email Address"
                size="massive"
                validations={{
                    isExisty: true,
                    isEmail: 6
                }}
                validationErrors={{
                    isExisty: 'Please enter an email address',
                    isEmail: 'Please enter a valid email address'
                }}
                errorLabel={errorLabel}
            />
            <Form.Input
                name="password"
                id="password"
                type="password"
                label="Password"
                size="massive"
                validations={{
                    isExisty: true,
                    minLength: 6,
                    maxLength: 50
                }}
                validationErrors={{
                    isExisty: 'Please enter a password',
                    minLength: 'Please enter at least 6 characters'
                }}
                errorLabel={errorLabel}
            />
            <Button color="green" loading={props.isLoading}>Submit</Button>
        </Form>
    </Message>
)

LoginForm.defaultProps = {
    isError: false,
    isLoading: false
}

LoginForm.propTypes = {
    handleLoginSubmit: func.isRequired,
    clearError: func.isRequired,
    isError: bool,
    isLoading: bool
}

export default LoginForm
