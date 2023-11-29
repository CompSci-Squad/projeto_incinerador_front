import SectionDetail from '~/components/SectionDetail'

import SectionContactContent, {
  frontmatter as sectionContactContentFrontmatter,
} from './content/contact1.mdx'
import SectionContactContent2 from './content/contact2.mdx'

const Contact = () => {
  return (
    <main className="inset-x-0 bottom-0 pb-6 pt-20">
      <h1 className="flex justify-center text-xl font-black">
        {sectionContactContentFrontmatter.title}
      </h1>
      <SectionDetail
        images={[sectionContactContentFrontmatter.image]}
        content={[
          <SectionContactContent key={1} />,
          <SectionContactContent2 key={2} />,
        ]}
        alts={[sectionContactContentFrontmatter.alt]}
      />
    </main>
  )
}

export default Contact
