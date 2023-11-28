import { useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import { RxHamburgerMenu } from 'react-icons/rx'

import { ROUTES } from '~/routes/pages-routes'

import LinkHeader, { LinkHeaderProps } from './LinkHeader'

const Header = () => {
  const links: Array<LinkHeaderProps> = [
    { path: ROUTES.COLLECTIVE.HOME, title: 'O Coletivo' },
    { path: ROUTES.HISTORY.HOME, title: 'História' },
    { path: ROUTES.CONTRIBUTE, title: 'Apoie a usina' },
    { path: ROUTES.PARTNERS, title: 'Nossos apoios' },
    { path: ROUTES.STORE.HOME, title: 'Loja' },
    { path: ROUTES.EVENTS.HOME, title: 'Eventos' },
    { path: ROUTES.NEWS, title: 'Notícias' },
    { path: ROUTES.CONTACT, title: 'fale conosco' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed left-0 top-0 z-30 w-full bg-eco_green shadow-md">
      <div className="items-center justify-between bg-eco_green px-7 py-4 md:flex md:px-10">
        <p>Logo Aqui</p>
        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 top-4 cursor-pointer md:hidden"
          >
            {isOpen ? (
              <HiXMark className="h-7 w-7" />
            ) : (
              <RxHamburgerMenu className="h-7 w-7" />
            )}
          </button>
          <ul
            className={`absolute left-0 z-[-1] w-full bg-eco_green pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              isOpen ? 'top-12' : 'top-[-490px]'
            }`}
          >
            {links.map((link) => (
              <LinkHeader
                key={link.title}
                path={link.path}
                title={link.title}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
