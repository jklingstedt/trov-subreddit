import { configure } from '@storybook/react'
import 'storybook-chromatic'

import '../src/styles/app.css'

const req = require.context('../src/components', true, /\.stories\.jsx$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
