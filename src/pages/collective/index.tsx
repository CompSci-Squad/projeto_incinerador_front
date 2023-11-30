import { ROUTES } from '~/routes/pages-routes'

import CollectiveSection from './components/CollectiveSection'
import CollectiveSectionGrow, {
  frontmatter as growSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveGrow.mdx'
import CollectiveSectionIdeia, {
  frontmatter as ideasSectionFrontmatter,
} from './components/CollectiveSection/content/selectionCollectiveIdeas.mdx'

const Collective = () => {
  const sections = [
    {
      image: ideasSectionFrontmatter.image,
      path: ROUTES.COLLECTIVE.IDEAS,
      title: ideasSectionFrontmatter.title,
      content: <CollectiveSectionIdeia />,
    },
    {
      image: growSectionFrontmatter.image,
      title: growSectionFrontmatter.title,
      path: ROUTES.COLLECTIVE.GROW,
      content: <CollectiveSectionGrow />,
    },
  ]
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-52">
      <div className="inset-x-0 bottom-0 flex justify-center pb-6 pt-20 text-xl font-black">
        O Coletivo
      </div>
      <section className="flex flex-col items-center justify-center gap-3 py-6 md:flex-row">
        {sections.map(({ content, image, path, title }) => (
          <CollectiveSection
            image={image}
            path={path}
            title={title}
            key={title}
          >
            {content}
          </CollectiveSection>
        ))}
      </section>
    </main>
  )
}

export default Collective
