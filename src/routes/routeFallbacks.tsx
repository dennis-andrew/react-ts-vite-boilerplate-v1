import { Button, Result, Spin } from 'antd'
import {
  Link,
  type ErrorComponentProps,
  type NotFoundRouteProps,
} from '@tanstack/react-router'
import styles from './routeFallbacks.module.scss'

export const RoutePendingFallback = () => (
  <div className={styles['route-fallback']}>
    <Spin />
  </div>
)

export const RouteErrorFallback = ({ error }: ErrorComponentProps) => (
  <div className={styles['route-fallback']}>
    <Result
      status="error"
      title="Something went wrong"
      subTitle={error.message}
      extra={
        <Link to="/">
          <Button type="primary">Go home</Button>
        </Link>
      }
    />
  </div>
)

export const RouteNotFoundFallback = (_props: NotFoundRouteProps) => (
  <div className={styles['route-fallback']}>
    <Result
      status="404"
      title="Page not found"
      subTitle="The page you requested does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Go home</Button>
        </Link>
      }
    />
  </div>
)
