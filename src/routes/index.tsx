import { RouterProvider } from 'react-router-dom'

import { routes } from './routes'

function Main() {
  return (
    <RouterProvider
      fallbackElement={
        <h1>not implemented, please implement fallback element</h1>
      }
      router={routes}
    />
  )
}

export default Main
