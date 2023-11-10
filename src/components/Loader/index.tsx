import React from 'react'
import { Await } from 'react-router-dom'

interface LoaderProps<T> {
  resolve: T
  children: (props: T) => JSX.Element
  loading: React.ReactNode
  error: React.ReactNode
}

const Loader = <T,>({ resolve, children, loading, error }: LoaderProps<T>) => {
  return (
    <React.Suspense fallback={loading}>
      <Await resolve={resolve} errorElement={error}>
        {(data) => children(data)}
      </Await>
    </React.Suspense>
  )
}

export default Loader
