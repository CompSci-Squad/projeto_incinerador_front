import { ROUTES } from '~/routes/pages-routes'

import Banner from '../../components/Banner'
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
  const sections = [
    {
      title: collectiveFrontmatter.title,
      path: ROUTES.COLLECTIVE.HOME,
      image: collectiveFrontmatter.image,
      text: <CollectiveText />,
    },
    {
      title: historyFrontmatter.title,
      path: ROUTES.HISTORY.HOME,
      image: historyFrontmatter.image,
      text: <HistoryText />,
    },
    {
      title: contributeFrontmatter.title,
      path: ROUTES.CONTRIBUTE,
      image: contributeFrontmatter.image,
      text: <ContributeText />,
    },
    {
      title: storeFrontmatter.title,
      path: ROUTES.STORE.HOME,
      image: storeFrontmatter.image,
      text: <StoreText />,
    },
    {
      title: eventFrontmatter.title,
      path: ROUTES.EVENTS.HOME,
      image: eventFrontmatter.image,
      text: <EventText />,
    },
    {
      title: newsFrontmatter.title,
      path: ROUTES.NEWS,
      image: newsFrontmatter.image,
      text: <NewsText />,
    },
    {
      title: contactFrontmatter.title,
      path: ROUTES.CONTACT,
      image: contactFrontmatter.image,
      text: <ContactText />,
    },
    {
      title: partnersFrontmatter.title,
      path: ROUTES.PARTNERS,
      image: partnersFrontmatter.image,
      text: <PartnersText />,
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <Banner />
      <ul className="mx-4 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:py-6">
        {sections.map(({ image, path, text, title }) => (
          <HomeSection image={image} title={title} path={path} key={title}>
            {text}
          </HomeSection>
        ))}
      </ul>
    </main>
  )
}

export default Home
