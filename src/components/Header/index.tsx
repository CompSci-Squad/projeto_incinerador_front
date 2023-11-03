import { ROUTES } from '~/routes/pages-routes'

import LinkHeader from './LinkHeader'

const Header = () => {
  return (
    <header className="flex justify-between bg-eco_green px-6 py-5 text-center">
      <p>test</p>
      <nav className="flex items-center justify-between gap-4 text-center">
        <LinkHeader path={ROUTES.COLLECTIVE} title="O Coletivo" />
        <LinkHeader path={ROUTES.HISTORY} title="História" />
        <LinkHeader path={ROUTES.CONTRIBUTE} title="Apoie a usina" />
        <LinkHeader path={ROUTES.STORE} title="Loja" />
        <LinkHeader path={ROUTES.EVENTS} title="Eventos" />
        <LinkHeader path={ROUTES.NEWS} title="notícias" />
        <LinkHeader path={ROUTES.CONTACT} title="fale conosco" />
      </nav>
    </header>
  )
}

export default Header
