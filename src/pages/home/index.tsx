import Banner from '~/pages/home/components/Banner'
import HomeSection from '~/pages/home/HomeSection'
import { ROUTES } from '~/routes/pages-routes'

import CollectiveText, {
  frontmatter as collectiveFrontmatter,
} from './content/collective.mdx'

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="flex justify-around py-6">
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
      </section>
      <section className="flex justify-around py-6">
        <HomeSection
          title="Loja"
          path={ROUTES.STORE}
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
