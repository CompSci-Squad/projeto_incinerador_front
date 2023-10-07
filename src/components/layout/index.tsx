import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <h1>Layout para o site inteiro</h1>
      <Outlet />
    </>
  )
}

export default Layout
