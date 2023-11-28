import dayjs from 'dayjs'

import { ROUTES } from '~/routes/pages-routes'

import LinkFooter, { LinkFooterProps } from './LinkFooter'

const Footer = () => {
  const year = dayjs().get('year')
  const links: Array<LinkFooterProps> = [
    {
      path: ROUTES.COLLECTIVE.HOME,
      title: 'O Coletivo',
    },
    {
      path: ROUTES.HISTORY.HOME,
      title: 'História',
    },
    {
      path: ROUTES.CONTRIBUTE,
      title: 'Apoie a usina',
    },
    {
      path: ROUTES.EVENTS.HOME,
      title: 'Eventos',
    },
    {
      path: ROUTES.CONTACT,
      title: 'Fale conosco',
    },
  ]
  return (
    <footer className="bg-eco_green">
      <ul className="flex flex-col items-center justify-around gap-3 py-2 pt-4 md:grow md:flex-row">
        {links.map((link) => (
          <LinkFooter key={link.title} path={link.path} title={link.title} />
        ))}
      </ul>
      <section className="flex flex-col items-center justify-center py-2 ">
        <LinkFooter
          styles="font-normal"
          path={ROUTES.ABOUTUS}
          title="Criado por alunos de Ciência Da Computação do I.M.T."
        />
        <p>&#169; {year} Usina Eco Cultural</p>
      </section>
    </footer>
  )
}

export default Footer
