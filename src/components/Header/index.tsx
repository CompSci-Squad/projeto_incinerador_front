import { ROUTES } from '../../routes/pages-routes'
import Button from '../Button'

const Header = () => {
  return (
    <header className="flex justify-between text-center px-6 py-6">
      <p>test</p>
      <section className="flex justify-between text-center">
        <Button navigateTo={ROUTES.COLLECTIVE}>O Coletivo</Button>
      </section>
    </header>
  )
}

export default Header
