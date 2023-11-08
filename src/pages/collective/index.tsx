import CollectiveSection from '~/components/CollectiveSection'

import { ROUTES } from '../../routes/pages-routes'

const Collective = () => {
  return (
    <main>
      <div className="flex justify-center text-xl font-black">O Coletivo</div>
      <section className="flex justify-around py-6">
        <CollectiveSection
          title="Sessão 1"
          path={ROUTES.COLLECTIVES1}
          text="Texto sobre o que terá na sessão 1"
          image="/images/cachorro_arabe.jpeg"
        />
        <CollectiveSection
          title="Sessão 2"
          path={ROUTES.COLLECTIVES2}
          text="Texto sobre o que terá na sessão 2"
          image="/images/cachorro_arabe.jpeg"
        />
      </section>
    </main>
  )
}

export default Collective
