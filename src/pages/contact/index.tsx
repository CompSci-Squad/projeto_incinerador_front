import SectionDetail, { SectionDetailProps } from '~/components/SectionDetail'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import SectionContactContent, {
  frontmatter as sectionContactContentFrontmatter,
} from './content/contact1.mdx'
import SectionContactContent2 from './content/contact2.mdx'

const Contact = () => {
  const content: Array<SectionDetailProps> = [
    {
      image: sectionContactContentFrontmatter.image,
      content: <SectionContactContent />,
      alt: sectionContactContentFrontmatter.alt,
    },
    {
      content: <SectionContactContent2 />,
    },
  ]
  return (
    <main className="inset-x-0 pb-6 pt-20 md:mb-40">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="flex justify-center text-xl font-black">
        {sectionContactContentFrontmatter.title}
      </h1>
      <SectionDetail arr={content} />
    </main>
  )
}

export default Contact
