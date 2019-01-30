import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../elements/button'

storiesOf('Button', module)
    .add('Small Green Button', () => (
        <Button size="small" onClick={action('clicked')}>
            Small Green Button
        </Button>
    ))
    .add('Large Black Button', () => (
        <Button size="large" onClick={action('clicked')} color="black">
            Large Black Button
        </Button>
    ))
