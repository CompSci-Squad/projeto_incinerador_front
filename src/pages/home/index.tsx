import Banner from '~/components/Banner'
import HomeSection from '~/components/HomeSection'
import Test from '~/content/index.mdx'

import { ROUTES } from '../../routes/pages-routes'

const Home = () => {
  return (
    <main className="h-screen">
      <Banner />
      <h1>It works and you found me!</h1>
      <Test />
      <section className="flex justify-around pb-6">
        <HomeSection
          title="sexo"
          path={ROUTES.COLLECTIVE}
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="sexo"
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="sexo"
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
      </section>
      <section className="flex justify-around">
        <HomeSection
          title="sexo"
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="sexo"
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
        <HomeSection
          title="sexo"
          text="Ola mundo, isso é um test"
          image="/images/cachorro_arabe.jpeg"
        />
      </section>
    </main>
  )
}

export default Home
