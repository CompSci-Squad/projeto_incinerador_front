import CollectiveSection from "./components/CollectiveSection"
import { ROUTES } from "~/routes/pages-routes"

import CollectiveSectionGrow, {
  frontmatter as growSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveGrow.mdx'
import CollectiveSectionIdeia, {
  frontmatter as ideasSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveIdeas.mdx'


const Collective = () => {
  return (
    <main>
      <div className="flex inset-x-0 bottom-0 pt-20 pb-6 justify-center text-xl font-black">O Coletivo</div>
      <section className="flex flex-col md:flex-row md:justify-around justify-center py-6">
        <CollectiveSection
          image={ideasSectionFrontmatter.image || "./images/cachorro_arabe.jpeg"}
          path={ROUTES.COLLECTIVE.IDEAS}
          title={ideasSectionFrontmatter.title || "Ideas"}
        >
          <CollectiveSectionIdeia />
        </CollectiveSection>
        <CollectiveSection
          image={growSectionFrontmatter.image || "./images/cachorro_arabe.jpeg"}
          path={ROUTES.COLLECTIVE.GROW}
          title={growSectionFrontmatter.title || "Grow"}
        >
          <CollectiveSectionGrow />
        </CollectiveSection>
      </section>
    </main>
  )
}

export default Collective
