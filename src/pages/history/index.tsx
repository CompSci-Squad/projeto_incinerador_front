import { ROUTES } from '~/routes/pages-routes'

import ReturnButton from '../../components/ReturnButton'
import HistorySection from './components/HistorySection'
import HistorySectionIncinerator, {
  frontmatter as incineratorSectionFrontmatter,
} from './components/HistorySection/content/selectionHistoryIncinerator.mdx'
import HistorySectionOccupation, {
  frontmatter as occupationSectionFrontmatter,
} from './components/HistorySection/content/selectionHistoryOccupation.mdx'

const History = () => {
  const content = [
    {
      image: incineratorSectionFrontmatter.image,
      title: incineratorSectionFrontmatter.title,
      content: <HistorySectionIncinerator />,
      path: ROUTES.HISTORY.INCINERATOR,
    },
    {
      image: occupationSectionFrontmatter.image,
      title: occupationSectionFrontmatter.title,
      content: <HistorySectionOccupation />,
      path: ROUTES.HISTORY.OCCUPATION,
    },
  ]
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-52">
      <ReturnButton path={ROUTES.HOME} />
      <div className="flex justify-center text-xl font-black">A História</div>
      <section className="flex flex-col items-center justify-center gap-3 py-6 md:flex-row">
        {content.map(({ content, image, title, path }) => (
          <HistorySection image={image} title={title} key={title} path={path}>
            {content}
          </HistorySection>
        ))}
      </section>
    </main>
  )
}

export default History
