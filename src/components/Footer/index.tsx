import dayjs from 'dayjs'

import { ROUTES } from '~/routes/pages-routes'

import LinkFooter from './LinkFooter'

const Footer = () => {
  const year = dayjs().get('year')
  return (
    <footer className="bg-eco_green">
      <section className="flex grow items-center justify-around gap-4 py-2 pt-4">
        <LinkFooter path={ROUTES.COLLECTIVE} title="O Coletivo" />
        <LinkFooter path={ROUTES.HISTORY} title="História" />
        <LinkFooter path={ROUTES.CONTRIBUTE} title="Apoie a Usina" />
        <LinkFooter path={ROUTES.EVENTS} title="Eventos" />
        <LinkFooter path={ROUTES.CONTACT} title="Fale conosco" />
      </section>
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
