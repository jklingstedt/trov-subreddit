import React from 'react'
import { storiesOf } from '@storybook/react'
import { RouterProvider, createRouter, createRootRoute } from '@tanstack/react-router'

import Header from '../header'

// Create a simple mock router for Storybook
const rootRoute = createRootRoute({
  component: () => <Header />,
})

const router = createRouter({
  routeTree: rootRoute,
})

storiesOf('Header', module)
    .add('Default Header', () => (
        <RouterProvider router={router} />
    ))
