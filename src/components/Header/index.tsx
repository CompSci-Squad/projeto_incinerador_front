import { ROUTES } from '../../routes/pages-routes'
import LinkHeader from '../LinkHeader'

const Header = () => {
  return (
    <header className="flex justify-between text-center px-6 py-6">
      <p>test</p>
      <section className="flex justify-between text-center">
        <LinkHeader path={ROUTES.COLLECTIVE} title="O Coletivo" />
        <LinkHeader path={ROUTES.HISTORY} title="História" />
        <LinkHeader path={ROUTES.CONTRIBUTE} title="Apoie a usina" />
        <LinkHeader path={ROUTES.STORE} title="Loja" />
        <LinkHeader path={ROUTES.EVENTS} title="Eventos" />
        <LinkHeader path={ROUTES.NEWS} title="notícias" />
      </section>
    </header>
  )
}

export default Header
