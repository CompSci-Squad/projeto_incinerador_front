import Banner from '~/components/Banner'
import HomeSection from '~/components/HomeSection'

import { ROUTES } from '../../routes/pages-routes'

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="flex justify-around py-6">
        <HomeSection
          title="O Coletivo"
          path={ROUTES.COLLECTIVE}
          text="Texto sobre o que tera na aba O Coletivo"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="História"
          path={ROUTES.HISTORY}
          text="Texto sobre o que tera na aba História"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="Apoie a Usina"
          path={ROUTES.CONTRIBUTE}
          text="Texto sobre o que tera na aba Apoie a Usina"
          image="/images/cachorro_arabe.jpeg"
        />
      </section>
      <section className="flex justify-around py-6">
        <HomeSection
          title="Loja"
          path={ROUTES.STORE}
          text="Texto sobre o que tera na aba Loja"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="Eventos"
          path={ROUTES.EVENTS}
          text="Texto sobre o que tera na aba Eventos"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="Notícias"
          path={ROUTES.NEWS}
          text="Texto sobre o que tera na aba Notícias"
          image="/images/cachorro_arabe.jpeg"
        />
      </section>
    </main>
  )
}

export default Home
