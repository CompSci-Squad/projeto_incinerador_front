import { ROUTES } from '~/routes/pages-routes'

import CollectiveSection from './components/CollectiveSection'
import CollectiveSectionGrow, {
  frontmatter as growSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveGrow.mdx'
import CollectiveSectionIdeia, {
  frontmatter as ideasSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveIdeas.mdx'

const Collective = () => {
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-40">
      <div className="inset-x-0 bottom-0 flex justify-center pb-6 pt-20 text-xl font-black">
        O Coletivo
      </div>
      <section className="flex flex-col items-center justify-center gap-3 py-6 md:flex-row">
        <CollectiveSection
          image={
            ideasSectionFrontmatter.image || './images/cachorro_arabe.jpeg'
          }
          path={ROUTES.COLLECTIVE.IDEAS}
          title={ideasSectionFrontmatter.title || 'Ideas'}
        >
          <CollectiveSectionIdeia />
        </CollectiveSection>
        <CollectiveSection
          image={growSectionFrontmatter.image || './images/cachorro_arabe.jpeg'}
          path={ROUTES.COLLECTIVE.GROW}
          title={growSectionFrontmatter.title || 'Grow'}
        >
          <CollectiveSectionGrow />
        </CollectiveSection>
      </section>
    </main>
  )
}

export default Collective
