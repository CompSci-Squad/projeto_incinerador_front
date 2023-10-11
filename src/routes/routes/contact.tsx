import { RouteObject } from 'react-router-dom'

import Contact from '~/pages/contact'

export const contactRoute: RouteObject = {
  path: 'Contact',
  element: (
    <>
      <Contact />
    </>
  ),
}
