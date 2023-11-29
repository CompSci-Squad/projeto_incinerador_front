import { ROUTES } from '~/routes/pages-routes'

import HomeSection from './components/HomeSection/'
import CollectiveText, {
  frontmatter as collectiveFrontmatter,
} from './content/homeCollective.mdx'
import ContactText, {
  frontmatter as contactFrontmatter,
} from './content/homeContact.mdx'
import EventText, {
  frontmatter as eventFrontmatter,
} from './content/homeEvents.mdx'
import HistoryText, {
  frontmatter as historyFrontmatter,
} from './content/homeHistory.mdx'
import NewsText, {
  frontmatter as newsFrontmatter,
} from './content/homeNews.mdx'
import PartnersText, {
  frontmatter as partnersFrontmatter,
} from './content/homeOurSupports.mdx'
import StoreText, {
  frontmatter as storeFrontmatter,
} from './content/homeStore.mdx'
import ContributeText, {
  frontmatter as contributeFrontmatter,
} from './content/homeSupport.mdx'

const Home = () => {
  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <ul className="mx-4 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:py-6">
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
        <HomeSection
          title={contactFrontmatter.title}
          path={ROUTES.CONTACT}
          image={contactFrontmatter.image}
        >
          <ContactText />
        </HomeSection>
        <HomeSection
          title={partnersFrontmatter.title}
          path={ROUTES.PARTNERS}
          image={partnersFrontmatter.image}
        >
          <PartnersText />
        </HomeSection>
      </ul>
    </main>
  )
}

export default Home
