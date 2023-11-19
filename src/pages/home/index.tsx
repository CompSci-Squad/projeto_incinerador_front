import Banner from '~/pages/home/components/Banner'
import { ROUTES } from '~/routes/pages-routes'

import HomeSection from './components/HomeSection/'
import CollectiveText, {
  frontmatter as collectiveFrontmatter,
} from './content/homeCollective.mdx'
import EventText, {
  frontmatter as eventFrontmatter,
} from './content/homeEvents.mdx'
import HistoryText, {
  frontmatter as historyFrontmatter,
} from './content/homeHistory.mdx'
import NewsText, {
  frontmatter as newsFrontmatter,
} from './content/homeNews.mdx'
import StoreText, {
  frontmatter as storeFrontmatter,
} from './content/homeStore.mdx'
import ContributeText, {
  frontmatter as contributeFrontmatter,
} from './content/homeSupport.mdx'

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="grid grid-cols-3 grid-rows-2 gap-4 py-6">
        <HomeSection
          title={collectiveFrontmatter.title}
          path={ROUTES.COLLECTIVE.HOME}
          image={collectiveFrontmatter.image}
        >
          <CollectiveText />
        </HomeSection>
        <HomeSection
          title={historyFrontmatter.title}
          path={ROUTES.HISTORY.HOME}
          image={historyFrontmatter.image}
        >
          <HistoryText />
        </HomeSection>
        <HomeSection
          title={contributeFrontmatter.title}
          path={ROUTES.CONTRIBUTE}
          image={contributeFrontmatter.image}
        >
          <ContributeText />
        </HomeSection>
        <HomeSection
          title={storeFrontmatter.title}
          path={ROUTES.STORE.HOME}
          image={storeFrontmatter.image}
        >
          <StoreText />
        </HomeSection>
        <HomeSection
          title={eventFrontmatter.title}
          path={ROUTES.EVENTS.HOME}
          image={eventFrontmatter.image}
        >
          <EventText />
        </HomeSection>
        <HomeSection
          title={newsFrontmatter.title}
          path={ROUTES.NEWS}
          image={newsFrontmatter.image}
        >
          <NewsText />
        </HomeSection>
      </section>
    </main>
  )
}

export default Home
