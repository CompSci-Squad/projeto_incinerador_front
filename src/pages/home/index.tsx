import Banner from '~/pages/home/components/Banner'
import { ROUTES } from '~/routes/pages-routes'

import HomeSection from './components/HomeSection/'
import CollectiveText, {
  frontmatter as collectiveFrontmatter,
} from './content/collective.mdx'

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="grid grid-cols-3 grid-rows-2 py-6">
        <HomeSection
          title={collectiveFrontmatter.title}
          path={ROUTES.COLLECTIVE}
          image={collectiveFrontmatter.image}
        >
          <CollectiveText />
        </HomeSection>
        <HomeSection
          title="História"
          path={ROUTES.HISTORY}
          image="/images/cachorro_arabe.jpeg"
        ></HomeSection>
        <HomeSection
          title="Apoie a Usina"
          path={ROUTES.CONTRIBUTE}
          image="/images/cachorro_arabe.jpeg"
        ></HomeSection>
        <HomeSection
          title="Loja"
          path={ROUTES.STORE.HOME}
          image="/images/cachorro_arabe.jpeg"
        ></HomeSection>
        <HomeSection
          title="Eventos"
          path={ROUTES.EVENTS}
          image="/images/cachorro_arabe.jpeg"
        ></HomeSection>
        <HomeSection
          title="Notícias"
          path={ROUTES.NEWS}
          image="/images/cachorro_arabe.jpeg"
        ></HomeSection>
      </section>
    </main>
  )
}

export default Home
