import SectionDetail from '~/components/SectionDetail'

import SectionContent, {
  frontmatter as sectionContentFrontmatter,
} from './content/content.mdx'
import Section2Content from './content/content2.mdx'

const Section1 = () => {
  return (
    <main>
      <h1>{sectionContentFrontmatter.title}</h1>
      <SectionDetail
        images={sectionContentFrontmatter.images ?? ['']}
        content={[<SectionContent key={1} />, <Section2Content key={2} />]}
      />
    </main>
  )
}

export default Section1
