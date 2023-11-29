import { ROUTES } from '~/routes/pages-routes'

import HistorySection from './components/HistorySection'
import HistorySectionIncinerator, {
  frontmatter as incineratorSectionFrontmatter,
} from './components/HistorySection/content/selectionHistoryIncinerator.mdx'
import HistorySectionOccupation, {
  frontmatter as occupationSectionFrontmatter,
} from './components/HistorySection/content/selectionHistoryOccupation.mdx'

const History = () => {
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-40">
      <div className="flex justify-center text-xl font-black">A História</div>
      <section className="flex justify-around py-6">
        <HistorySection
          image={
            incineratorSectionFrontmatter.image ||
            './images/cachorro_arabe.jpeg'
          }
          path={ROUTES.HISTORY.INCINERATOR}
          title={incineratorSectionFrontmatter.title || 'Incinerator'}
        >
          <HistorySectionIncinerator />
        </HistorySection>
        <HistorySection
          image={
            occupationSectionFrontmatter.image || './images/cachorro_arabe.jpeg'
          }
          path={ROUTES.HISTORY.OCCUPATION}
          title={occupationSectionFrontmatter.title || 'Occupation'}
        >
          <HistorySectionOccupation />
        </HistorySection>
      </section>
    </main>
  )
}

export default History
