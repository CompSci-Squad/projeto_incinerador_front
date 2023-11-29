import SectionDetail from '~/components/SectionDetail'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import SectionContactContent, {
  frontmatter as sectionContactContentFrontmatter,
} from './content/contact1.mdx'
import SectionContactContent2 from './content/contact2.mdx'

const Contact = () => {
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-40">
      <ReturnButton path={ROUTES.HOME} />
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
