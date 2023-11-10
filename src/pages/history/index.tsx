import { ROUTES } from '../../routes/pages-routes'
import HistorySection from './components/HistorySection'
import Section1Text, {
  frontmatter as section1Frontmatter,
} from './content/historySection1.mdx'
import Section2Text, {
  frontmatter as section2Frontmatter,
} from './content/historySection2.mdx'

const History = () => {
  return (
    <main>
      <div className="flex justify-center text-xl font-black">A História</div>
      <section className="flex justify-around py-6">
        <HistorySection
          title={section1Frontmatter.title}
          path={ROUTES.HISTORY.SECTION1}
          image={section1Frontmatter.image}
        >
          <Section1Text />
        </HistorySection>
        <HistorySection
          title={section2Frontmatter.title}
          path={ROUTES.HISTORY.SECTION2}
          image={section2Frontmatter.image}
        >
          <Section2Text />
        </HistorySection>
      </section>
    </main>
  )
}

export default History
