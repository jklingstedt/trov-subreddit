import React, { Suspense } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import MainContainerElement from '../components/elements/main-container-element'
import Header from '../components/header'

const Loading = () => 'Loading...'

export const Route = createRootRoute({
  component: () => (
    <Suspense fallback={<Loading />}>
      <MainContainerElement>
        <Header />
        <Outlet />
      </MainContainerElement>
      <TanStackRouterDevtools />
    </Suspense>
  ),
})
