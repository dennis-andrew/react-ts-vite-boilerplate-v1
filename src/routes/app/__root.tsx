import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { RouterContext } from 'src/routes/routerContext'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute,
})

function RootRoute() {
  return <Outlet />
}
